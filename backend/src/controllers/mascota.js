const { Pet } = require('../models/mascota')
const { User } = require('../models/usuario')

const createPet = async (req, res) => {
  const user = await User.findById(req.body.user)
  if (!user) {
    console.log(user, req.body)
    throw new Error('El usuario no existe')
  }

  try {
    const pet = new Pet({
      animal: req.body.animal,
      name: req.body.name,
      note: req.body.note,
      date: new Date(),
      important: req.body.important === undefined ? false : req.body.important,
      user: user._id
    })

    const savedPet = await pet.save()
    user.pets = user.pets.concat(savedPet._id)
    await user.save()
    res.json(savedPet)
    console.log('Mascota cargada!')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getAll = async (req, res) => {
  try {
    const mascotas = await Pet.find()
    res.json(mascotas)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateInfo = async (req, res, next) => {
  console.log(req.body)
  const body = req.body

  const pet = {
    animal: body.animal,
    name: body.name,
    note: body.note,
    important: body.important
  }

  Pet.findByIdAndUpdate(req.params.id, pet, { new: true })
    .then(updatedPet => {
      res.json(updatedPet)
    })
    .catch(error => next(error))
}

const deletePet = async (req, res) => {
  Pet.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end()
      console.log('Mascota eliminada.')
    })
    .catch(error => {
      console.log(error)
      res.status(400).send({ error: 'malformatted id' })
    })
}

const getById = async (req, res) => {
  try {
    const mascotas = await Pet.findById(req.params.id)
    res.json(mascotas)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { createPet, getAll, updateInfo, deletePet, getById }
