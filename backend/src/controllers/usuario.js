const bcrypt = require('bcrypt')
const { User } = require('../models/usuario')
const { client } = require('../mongo')
const { ObjectId } = require('mongodb')
const { connectToDB } = require('../mongo')
const { generateToken } = require('../config/token')

const db = client.db('CasitaHuellitas_DB')
const collectionUser = db.collection('usuarios')

const createUser = async (req, res) => {
  const body = req.body

  if (!body.email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  if (!body.password) {
    return res.status(400).json({ error: 'Password is required' })
  }

  const saltRounds = 10
  const salt = await bcrypt.genSalt(saltRounds)
  const passwordHash = await bcrypt.hash(body.password, salt)

  const user = new User({
    email: body.email,
    name: body.name,
    passwordHash,
    pets: []
  })

  const savedUser = await user.save()

  res.json(savedUser)
}

const getAll = async (req, res) => {
  const users = await collectionUser.find({})
  res.json(users)
}

const getById = async (req, res) => {
  try {
    const user = await collectionUser.findOne({ _id: new ObjectId(req.params.id) })
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const login = async (req, res) => {
  try {
    const db = await connectToDB()
    const collection = db.collection('usuarios')

    // Buscar el usuario en la base de datos
    const user = await collection.findOne({ email: req.body.email })
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' })
    }

    // Verificar la contraseña
    const passwordMatch = await bcrypt.compare(req.body.password, user.passwordHash)
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' })
    }

    const payload = {
      _id: user._id,
      email: user.email
    }
    const token = generateToken(payload)

    res.cookie('token', token)

    res.json({ payload, token, message: 'Inicio de sesión exitoso' })
  } catch (err) {
    return res.status(500).json({ message: 'Error interno del servidor' })
  }
}

const getIdToken = async (req, res) => {
  const userId = req._id._id
  res.json({ _id: userId, message: 'Acceso autorizado' })
}

const logout = async (req, res) => {
  res.clearCookie('token')
  res.json({ message: 'Cierre de sesión exitoso' })
}

module.exports = { createUser, getAll, getById, getIdToken, login, logout }
