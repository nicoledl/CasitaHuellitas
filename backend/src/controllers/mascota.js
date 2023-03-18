const jwt = require('jsonwebtoken')
const { Pet } = require('../models/mascota')
const { ObjectId } = require('mongodb')
const { client } = require('../mongo')
require('dotenv').config()

const db = client.db('CasitaHuellitas_DB')
const collectionUser = db.collection('usuarios')
const collectionPet = db.collection('mascotas')

const createPet = async (req, res) => {
  try {
    // Obtener el token de la cookie de la solicitud
    const token = req.cookies.token
    if (!token) {
      return res.status(401).json({ message: 'Debe iniciar sesión para crear una mascota' })
    }

    // Decodificar el token para obtener el ID del usuario
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    const userId = decodedToken._id._id

    // Buscar el usuario en la base de datos
    const user = await collectionUser.findOne({ _id: ObjectId(userId) })
    if (!user) {
      return res.status(400).json({ message: 'El usuario no existe' })
    }

    // Crear la mascota con el ID del usuario
    const pet = new Pet({
      animal: req.body.animal,
      name: req.body.name,
      note: req.body.note,
      date: new Date(),
      important: req.body.important === undefined ? false : req.body.important,
      inAdoption: req.body.inAdoption === undefined ? false : req.body.inAdoption,
      user: ObjectId(userId)
    })

    const savedPet = await collectionPet.insertOne(pet)

    // Actualizar la lista de mascotas del usuario
    await collectionUser.updateOne(
      { _id: ObjectId(userId) },
      { $push: { pets: savedPet.insertedId } }
    )

    res.json(savedPet)
    console.log('Mascota cargada!')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getAll = async (req, res) => {
  try {
    const mascotas = await collectionPet.find().toArray()
    res.json(mascotas)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getByInAdoption = async (req, res) => {
  try {
    const mascotas = await collectionPet.find({ inAdoption: true }).toArray()
    res.json(mascotas)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateInfo = async (req, res) => {
  try {
    const pet = await collectionPet.findOneAndUpdate(
      { _id: ObjectId(req.params.id) },
      {
        $set:
        {
          animal: req.body.animal,
          name: req.body.name,
          note: req.body.note,
          important: req.body.important,
          inAdoption: req.body.inAdoption
        }
      },
      { new: true }
    )
    res.json(pet)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deletePet = async (req, res) => {
  try {
    const pet = await collectionPet.findOneAndDelete({ _id: ObjectId(req.params.id) })
    if (!pet) {
      return res.status(404).json({ error: 'Pet not found' })
    }
    res.status(204).end()
    console.log('Mascota eliminada.')
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'malformatted id' })
  }
}

const getById = async (req, res) => {
  try {
    const mascotas = await collectionPet.findById(req.params.id)
    res.json(mascotas)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { createPet, getAll, getByInAdoption, updateInfo, deletePet, getById }
