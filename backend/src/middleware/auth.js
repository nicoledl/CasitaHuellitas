const jwt = require('jsonwebtoken')
const Usuario = require('../models/usuario')
require('dotenv').config()

const getUserFromToken = async (req, res, next) => {
  const token = req.cookies.token
  console.log(req.cookies)
  if (!token) {
    return res.status(401).json({ message: 'No se encontró un token de autenticación' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const userId = decoded._id
    const user = await Usuario.findById(userId)
    if (!user) {
      return res.status(404).json({ message: 'No se encontró el usuario' })
    }

    req.user = user
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Token de autenticación inválido' })
  }
}

module.exports = { getUserFromToken }
