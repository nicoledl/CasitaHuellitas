const { createPet, getAll, deletePet, editPet, getInAdoptionPet } = require('../services/mascota')

const createPetController = async (req, res) => {
  try {
    const savedPet = await createPet(req)
    res.json(savedPet)
    console.log('Mascota cargada!')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getAllController = async (req, res) => {
  try {
    const mascotas = await getAll()
    res.json(mascotas)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const inAdoptionPetController = async (req, res) => {
  try {
    const { id } = req.params
    const { inAdoption } = req.body
    const updatedPet = await getInAdoptionPet(id, inAdoption)
    res.json(updatedPet)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const editPetController = async (req, res) => {
  try {
    const pet = await editPet(req.params.id, req.body)
    res.json(pet)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deletePetController = async (req, res) => {
  try {
    await deletePet(req.params.id)
    res.status(204).end()
    console.log('Mascota eliminada.')
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: 'malformatted id' })
  }
}

// const getById = async (req, res) => {
//   try {
//     const mascotas = await collectionPet.findById(req.params.id)
//     res.json(mascotas)
//   } catch (error) {
//     res.status(500).json({ error: error.message })
//   }
// }

module.exports = {
  createPetController,
  getAllController,
  inAdoptionPetController,
  editPetController,
  deletePetController
}
