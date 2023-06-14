const { createPet, getAll } = require('../services/mascota')

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

// const getByInAdoption = async (req, res) => {
//   try {
//     const mascotas = await collectionPet.find({ inAdoption: 'true' }).toArray()
//     res.json(mascotas)
//   } catch (error) {
//     res.status(500).json({ error: error.message })
//   }
// }

// const updateInfo = async (req, res) => {
//   try {
//     const pet = await collectionPet.findOneAndUpdate(
//       { _id: new ObjectId(req.params.id) },
//       {
//         $set:
//         {
//           animal: req.body.animal,
//           size: req.body.size,
//           breed: req.body.breed,
//           name: req.body.name,
//           note: req.body.note,
//           important: req.body.important,
//           inAdoption: req.body.inAdoption
//         }
//       },
//       { new: true }
//     )
//     res.json(pet)
//   } catch (error) {
//     res.status(500).json({ error: error.message })
//   }
// }

// const deletePet = async (req, res) => {
//   try {
//     const pet = await collectionPet.findOneAndDelete({ _id: new ObjectId(req.params.id) })
//     if (!pet) {
//       return res.status(404).json({ error: 'Pet not found' })
//     }
//     res.status(204).end()
//     console.log('Mascota eliminada.')
//   } catch (error) {
//     console.log(error)
//     res.status(400).json({ error: 'malformatted id' })
//   }
// }

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
  getAllController
  // getAll, getByInAdoption, updateInfo, deletePet, getById
}
