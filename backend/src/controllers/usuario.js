const bcrypt = require('bcrypt')
const { User } = require('../models/usuario')

const createUser = async (req, res) => {
  const body = req.body

  if (!body.email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  if (!body.password) {
    return res.status(400).json({ error: 'Password is required' })
  }

  const saltRounds = 10
  const salt = await bcrypt.genSalt(saltRounds)
  const passwordHash = await bcrypt.hash(body.password, salt)

  const user = new User({
    email: body.email,
    name: body.name,
    passwordHash,
    pets: []
  })

  const savedUser = await user.save()

  res.json(savedUser)
}

const getAll = async (req, res) => {
  const users = await User.find({})
  res.json(users)
}

const getById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { createUser, getAll, getById }
