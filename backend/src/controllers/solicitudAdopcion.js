const { Adopter } = require('../models/solicitudAdopcion')
const { client } = require('../mongo')
const { ObjectId } = require('mongodb')

const db = client.db('CasitaHuellitas_DB')
const collectionAdopter = db.collection('adoptantes')
const collectionPet = db.collection('mascotas')

const createAdoptionRequest = async (req, res) => {
  try {
    const body = req.body

    const pet = await collectionPet.findOne({ _id: ObjectId(body.pet) })
    const petObj = {
      name: pet.name,
      date: pet.date,
      id: pet._id
    }

    const questions = body.questions.map(({ pregunta, respuesta }) => ({ pregunta, respuesta }))

    const adopter = new Adopter({
      email: body.email,
      name: body.nombre,
      lastname: body.apellido,
      dni: body.dni,
      phone: body.telefono,
      address: body.direccion,
      pet: petObj,
      questions,
      fechaSolicitud: new Date()
    })

    const savedAdopter = await collectionAdopter.insertOne(adopter)

    res.json(savedAdopter)
    console.log('Carga exitosa!')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getAll = async (req, res) => {
  try {
    const adoptantes = await collectionAdopter.find().toArray()
    res.json(adoptantes)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getByDni = async (req, res) => {
  try {
    const adopter = await collectionAdopter.findOne({ dni: req.params.dni })
    res.json(adopter)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { createAdoptionRequest, getAll, getByDni }
