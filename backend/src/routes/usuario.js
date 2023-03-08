const express = require('express')
const router = express.Router()
const { createUser, getAll, getById, getIdToken, login, logout } = require('../controllers/usuario')
const { validateAuth } = require('../middleware/auth')

router.use(express.json())

router.post('/', createUser)
router.get('/', getAll)
router.post('/login', login)
router.get('/me', validateAuth, getIdToken)
router.get('/:id', getById)
router.post('/logout', logout)

module.exports = router
