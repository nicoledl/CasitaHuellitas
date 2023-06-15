const express = require('express')
const router = express.Router()
const mascotaController = require('../controllers/mascota')

router.use(express.json())

router.post('/', mascotaController.createPetController)
router.get('/', mascotaController.getAllController)
router.put('/en-adopcion/:id', mascotaController.inAdoptionPetController)
router.put('/:id', mascotaController.editPetController)
router.delete('/:id', mascotaController.deletePetController)

module.exports = router
