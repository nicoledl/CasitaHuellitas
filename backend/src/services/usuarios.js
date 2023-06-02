const bcrypt = require('bcrypt')
const { User } = require('../models/usuario')

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email })
    return user
  } catch (err) {
    throw new Error('Error al obtener el usuario por correo electrónico')
  }
}

const createUser = async (email, name, password) => {
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    email,
    name,
    password: passwordHash,
    pets: []
  })

  return user.save()
}

const getDataUser = async (decodedToken) => {
  const userId = decodedToken.userId
  const userData = await User.findById(userId)
  return userData
}

module.exports = { getUserByEmail, createUser, getDataUser }
