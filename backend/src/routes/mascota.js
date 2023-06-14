const express = require('express')
const router = express.Router()
const mascotaController = require('../controllers/mascota')

router.use(express.json())

router.post('/', mascotaController.createPetController)
router.get('/', mascotaController.getAllController)
// router.get('/en-adopcion', mascotaController.getByInAdoption)
// router.get('/:id', mascotaController.getById)
// router.put('/:id', mascotaController.updateInfo)
// router.delete('/:id', mascotaController.deletePet)

module.exports = router
