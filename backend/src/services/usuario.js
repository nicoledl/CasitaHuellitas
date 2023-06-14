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
  const { _id, email, name } = decodedToken._id
  const userData = await User.findById(_id)
  if (userData) {
    return {
      _id,
      email,
      name,
      userData
    }
  } else {
    throw new Error('Usuario no encontrado')
  }
}

module.exports = { getUserByEmail, createUser, getDataUser }
