const express = require('express')
const router = express.Router()
const { createUser, getAll, getById } = require('../controllers/usuario')

router.use(express.json())

router.post('/', createUser)
router.get('/', getAll)
router.get('/', getById)

module.exports = router
