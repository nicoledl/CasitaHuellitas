const { Pet } = require('../models/mascota')
const { User } = require('../models/usuario')
const jwt = require('jsonwebtoken')
const { ObjectId } = require('mongodb')

const createPet = async (req) => {
  // Obtener el token de la cookie de la solicitud
  const token = req.cookies.token
  if (!token) {
    throw new Error('Debe iniciar sesión para crear una mascota')
  }

  // Decodificar el token para obtener el ID del usuario
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
  const userId = decodedToken._id._id

  // Buscar el usuario en la base de datos
  const user = await User.findOne({ _id: new ObjectId(userId) })
  if (!user) {
    throw new Error('El usuario no existe')
  }

  // Crear la mascota con el ID del usuario
  const pet = new Pet({
    animal: req.body.animal,
    size: req.body.size,
    breed: req.body.breed,
    name: req.body.name,
    note: req.body.note,
    date: new Date(),
    important: req.body.important,
    inAdoption: req.body.inAdoption,
    user: new ObjectId(userId)
  })

  const savedPet = await Pet.insertOne(pet)

  // Actualizar la lista de mascotas del usuario
  await User.updateOne(
    { _id: new ObjectId(userId) },
    { $push: { pets: savedPet.insertedId } }
  )

  return savedPet
}

const getAll = async () => {
  try {
    const pets = await Pet.find({}).exec()
    return pets
  } catch (error) {
    throw new Error('Error retrieving pets')
  }
}

module.exports = {
  createPet,
  getAll
}
