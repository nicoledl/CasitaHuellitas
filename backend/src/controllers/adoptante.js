const { Adopter } = require('../models/adoptante')
const { client } = require('../mongo')
const { ObjectId } = require('mongodb')

const db = client.db('CasitaHuellitas_DB')
const collectionAdopter = db.collection('adoptantes')
const collectionPet = db.collection('mascotas')

const createAdopter = async (req, res) => {
  try {
    const body = req.body

    const pet = await collectionPet.findOne({ _id: ObjectId(body.pet) })
    const petObj = {
      name: pet.name,
      date: pet.date,
      id: pet._id
    }

    const adopter = new Adopter({
      email: body.email,
      name: body.name,
      lastname: body.lastname,
      dni: body.dni,
      phone: body.phone,
      address: body.address,
      pet: petObj,
      date: new Date()
    })

    const savedAdopter = collectionAdopter.insertOne(adopter)

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

const getById = async (req, res) => {
  try {
    const adopter = await collectionAdopter.findOne({ _id: ObjectId(req.params.id) })
    res.json(adopter)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { createAdopter, getAll, getById }
