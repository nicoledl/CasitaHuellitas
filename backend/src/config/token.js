require('dotenv').config()
const jwt = require('jsonwebtoken')

const SECRET = process.env.JWT_SECRET

const generateToken = (payload) => {
  const token = jwt.sign({ _id: payload }, SECRET, { expiresIn: '2d' })
  return token
}

const validateToken = (token) => {
  return jwt.verify(token, SECRET)
}

module.exports = { generateToken, validateToken }
