const express = require('express')
const router = express.Router()
const { getAll, getByDni, createAdoptionRequest } = require('../controllers/solicitudAdopcion')

router.use(express.json())

router.post('/', createAdoptionRequest)
router.get('/', getAll)
router.get('/:name', getByDni)

module.exports = router
