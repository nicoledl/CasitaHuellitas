const express = require('express')
const router = express.Router()
const { createUser, getAll, getById, getIdToken } = require('../controllers/usuario')

router.use(express.json())

router.post('/', createUser)
router.get('/', getAll)
router.get('/me', getIdToken)
router.get('/:id', getById)

module.exports = router
