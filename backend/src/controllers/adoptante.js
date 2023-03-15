const { Adopter } = require('../models/adoptante')
const { client } = require('../mongo')
const { ObjectId } = require('mongodb')

const db = client.db('CasitaHuellitas_DB')
const collectionAdopter = db.collection('adoptantes')

const createAdopter = async (req, res) => {
  const body = req.body

  const adopter = new Adopter({
    email: body.email,
    name: body.name,
    lastname: body.lastname,
    dni: body.dni,
    phone: body.phone,
    address: body.address,
    pet: body.pet,
    date: new Date()
  })

  const savedAdopter = await adopter.save()

  res.json(savedAdopter)
}

const getAll = async (req, res) => {
  const adopters = await collectionAdopter.find({})
  res.json(adopters)
}

const getById = async (req, res) => {
  try {
    const adopter = await collectionAdopter.findOne({ _id: ObjectId(req.params.id) })
    res.json(adopter)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { createAdopter, getAll, getById }
