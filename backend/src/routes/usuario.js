const express = require('express')
const router = express.Router()
const { createUser, getAll } = require('../controllers/usuario')

router.use(express.json())

router.post('/', createUser)
router.get('/', getAll)

module.exports = router
