const { ObjectId } = require('mongodb')
const { AdoptionRequest } = require('../models/solicitudAdopcion')

const createAdoptionRequest = async (req, res) => {
  try {
    const body = req.body

    const request = new AdoptionRequest({
      name: body.name,
      lastname: body.lastname,
      dni: body.dni,
      phone: body.phone,
      address: body.address,
      email: body.email,
      date: new Date(),
      questions: body.questions,
      pet: new ObjectId(body.pet)
    })

    const adoptionRequest = await request.save()

    return adoptionRequest
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getAll = async (req, res) => {
  try {
    const adoptantes = await AdoptionRequest.find({}).exec()
    res.json(adoptantes)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getByDni = async (req, res) => {
  try {
    const adopter = await AdoptionRequest.findOne({ dni: req.params.dni })
    res.json(adopter)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { createAdoptionRequest, getAll, getByDni }
