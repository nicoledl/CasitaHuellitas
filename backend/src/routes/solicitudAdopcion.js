const express = require('express')
const router = express.Router()
const controllerAdoptionRequest = require('../controllers/solicitudAdopcion')

router.use(express.json())

router.post('/', controllerAdoptionRequest.createAdoptionRequest)
router.get('/', controllerAdoptionRequest.getAll)
router.get('/:name', controllerAdoptionRequest.getByDni)

module.exports = router
