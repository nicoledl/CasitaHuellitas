const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuario')

router.use(express.json())

router.post('/login', usuarioController.loginUserController)
router.post('/logout', usuarioController.logoutUserController)

router.post('/', usuarioController.createUserController)
router.get('/me', usuarioController.getUserDataController)

module.exports = router
