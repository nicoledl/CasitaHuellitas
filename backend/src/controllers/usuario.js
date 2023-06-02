const bcrypt = require('bcrypt')
const { generateToken, validateToken } = require('../config/token')
const {
  getUserByEmail,
  createUser,
  getDataUser
} = require('../services/usuarios')

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
    res.cookie('token', token, { maxAge: 3600000, httpOnly: true })

    // Enviar el token como parte de la respuesta
    res.status(200).json({ token, username: user.username, name: user.name })
  } catch (err) {
    return res.status(500).json({ message: 'Error interno del servidor' })
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
    const token = (req.headers.cookie).replace('token=', '') // Obtén el token del encabezado de la solicitud
    // Validar el token
    const decodedToken = validateToken(token)

    // Obtener los datos del usuario según el token decodificado
    const userData = await getDataUser(decodedToken)

    res.status(200).json(userData)
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' })
  }
}

// const createUser = async (req, res) => {
//   const body = req.body

//   if (!body.email) {
//     return res.status(400).json({ error: 'Email is required' })
//   }

//   if (!body.password) {
//     return res.status(400).json({ error: 'Password is required' })
//   }

//   const saltRounds = 10
//   const salt = await bcrypt.genSalt(saltRounds)
//   const passwordHash = await bcrypt.hash(body.password, salt)

//   const user = new User({
//     email: body.email,
//     name: body.name,
//     passwordHash,
//     pets: []
//   })

//   const savedUser = await user.save()

//   res.json(savedUser)
// }

// const getAll = async (req, res) => {
//   const users = await collectionUser.find({})
//   res.json(users)
// }

// const getById = async (req, res) => {
//   try {
//     const user = await collectionUser.findOne({ _id: new ObjectId(req.params.id) })
//     res.json(user)
//   } catch (error) {
//     res.status(500).json({ error: error.message })
//   }
// }

// const getIdToken = async (req, res) => {
//   const userId = req._id._id
//   res.json({ _id: userId, message: 'Acceso autorizado' })
// }

// const logout = async (req, res) => {
//   res.clearCookie('token')
//   res.json({ message: 'Cierre de sesión exitoso' })
// }

// module.exports = { createUser, getAll, getById, getIdToken, login, logout }
module.exports = {
  loginUserController,
  createUserController,
  getUserDataController
}
