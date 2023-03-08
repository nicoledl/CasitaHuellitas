const { connectToDB } = require('../mongo')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const login = async (req, res) => {
  try {
    const db = await connectToDB()
    const collection = db.collection('usuarios')

    // Buscar el usuario en la base de datos
    const user = await collection.findOne({ email: req.body.email })
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' })
    }

    // Verificar la contraseña
    const passwordMatch = await bcrypt.compare(req.body.password, user.passwordHash)
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' })
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)

    res.cookie('token', token, {
      sameSite: 'none',
      secure: false
    })

    res.json({ user, token, message: 'Inicio de sesión exitoso' })
    console.log('Token generado:', token)
  } catch (err) {
    console.log('el error... ', err)
    return res.status(500).json({ message: 'Error interno del servidor' })
  }
}

const logout = async (req, res) => {
  // try {
  //   res.clearCookie('token', {
  //     sameSite: 'none',
  //     secure: true
  //   })
  //   res.status(200).json({ message: 'Sesión cerrada exitosamente' })
  // } catch (err) {
  //   console.log('Error destroying session:', err)
  //   res.status(500).json({ message: 'Error de servidor' })
  // }
}

module.exports = { login, logout }
