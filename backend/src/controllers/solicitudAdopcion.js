const { AdoptionRequest } = require('../models/solicitudAdopcion')
const { client } = require('../mongo')
const { ObjectId } = require('mongodb')

const db = client.db('CasitaHuellitas_DB')
const collectionAdoptionRequest = db.collection('solicitudesAdopcion')

const createAdoptionRequest = async (req, res) => {
  try {
    const body = req.body

    const adoptionRequest = new AdoptionRequest({
      name: body.name,
      lastname: body.lastname,
      dni: body.dni,
      phone: body.phone,
      address: body.address,
      email: body.email,
      date: new Date(),
      questions: body.questions,
      pet: ObjectId(body.pet)
    })

    const savedAdoptionRequest = await collectionAdoptionRequest.insertOne(adoptionRequest)

    res.json(savedAdoptionRequest)
    console.log('Envío de formulario exitoso!')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getAll = async (req, res) => {
  try {
    const adoptantes = await collectionAdoptionRequest.find().toArray()
    res.json(adoptantes)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getByDni = async (req, res) => {
  try {
    const adopter = await collectionAdoptionRequest.findOne({ dni: req.params.dni })
    res.json(adopter)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { createAdoptionRequest, getAll, getByDni }
