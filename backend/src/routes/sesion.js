const express = require('express')
const { login, logout } = require('../controllers/sesion')
const router = express.Router()

router.use(express.json())

router.post('/login', login)
router.post('/logout', logout)

module.exports = router
