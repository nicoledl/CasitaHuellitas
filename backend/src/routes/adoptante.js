const express = require('express')
const router = express.Router()
const { getAll, getById, createAdopter } = require('../controllers/adoptante')

router.use(express.json())

router.post('/', createAdopter)
router.get('/', getAll)
router.get('/:id', getById)

module.exports = router
