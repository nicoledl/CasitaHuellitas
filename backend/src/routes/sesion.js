const express = require('express')
const { login } = require('../controllers/sesion')
const router = express.Router()

router.use(express.json())

router.post('/login', login)
router.post('/logout', login)

module.exports = router
