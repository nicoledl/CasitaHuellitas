const jwt = require('jsonwebtoken')
require('dotenv').config()

const SECRET = process.env.JWT_SECRET

const generateToken = (payload) => {
  try {
    const token = jwt.sign({ _id: payload }, SECRET, { expiresIn: '2d' })
    return token
  } catch (error) {
    console.error('Error generating token:', error)
    throw error
  }
}

const validateToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET)
    console.log(SECRET)
    console.log(decoded)
    return decoded
  } catch (error) {
    throw new Error('Token inválido')
  }
}
module.exports = { generateToken, validateToken }
