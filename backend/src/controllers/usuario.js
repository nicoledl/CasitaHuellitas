const bcrypt = require('bcrypt')
const { generateToken, validateToken } = require('../config/token')
const {
  getUserByEmail,
  createUser,
  getDataUser
} = require('../services/usuario')

const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body

    // Buscar el usuario en la base de datos
    const user = await getUserByEmail(email)
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' })
    }

    // Verificar la contraseña
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' })
    }

    const payload = {
      _id: user._id,
      email: user.email,
      name: user.name
    }

    // Generar el token
    const token = generateToken(payload)

    // Establecer el token en una cookie
    res.cookie('token', token, { maxAge: 3600000 })

    // Enviar el token como parte de la respuesta
    res.status(200).json({ token, username: user.username, name: user.name })
  } catch (err) {
    return res.status(500).json({ message: 'Error interno del servidor' })
  }
}

const logoutUserController = (req, res) => {
  try {
    res.clearCookie('token')
    res.status(200).json({ message: 'Cierre de sesión exitoso' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}

const createUserController = async (req, res) => {
  const { email, name, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' })
  }

  try {
    const newUser = await createUser(email, name, password)
    res.json(newUser)
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' })
    console.log(error)
  }
}

const getUserDataController = async (req, res) => {
  try {
    const token = req.headers.cookie.replace('token=', '') // Obtén el token del encabezado de la solicitud
    // Validar el token
    const decodedToken = validateToken(token)
    // Obtener los datos del usuario según el token decodificado
    const userData = await getDataUser(decodedToken)

    res.status(200).json(userData)
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' })
  }
}

// const getAll = async (req, res) => {
//   const users = await collectionUser.find({})
//   res.json(users)
// }

module.exports = {
  loginUserController,
  logoutUserController,
  createUserController,
  getUserDataController
}
