const bcrypt = require('bcrypt')
const { User } = require('../models/usuario')
const { client } = require('../mongo')
const { ObjectId } = require('mongodb')
const jwt = require('jsonwebtoken')

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
    const user = await collectionUser.findOne({ _id: ObjectId(req.params.id) })
    res.send(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getIdToken = async (req, res) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No se proporcionó un token de autenticación' })
    }
    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const userId = decoded._id
    res.send(userId)
  } catch (error) {
    console.error(error)
    res.status(401).json({ message: 'Token inválido' })
  }
}

module.exports = { createUser, getAll, getById, getIdToken }
