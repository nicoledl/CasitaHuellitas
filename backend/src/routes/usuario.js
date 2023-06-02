const express = require('express')
const router = express.Router()
const usuariosController = require('../controllers/usuario')

router.use(express.json())

router.post('/login', usuariosController.loginUserController)

router.post('/', usuariosController.createUserController)
router.get('/me', usuariosController.getUserDataController)
// router.get('/', getAll)
// router.get('/:id', getById)
// router.post('/logout', logout)

module.exports = router
