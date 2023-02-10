const bcrypt = require('bcrypt')
const { User } = require('../models/usuario')

const createUser = async (req, res) => {
  const body = req.body

  if (!body.password) {
    return res.status(400).json({ error: 'Password is required' })
  }

  const saltRounds = 10
  const salt = await bcrypt.genSalt(saltRounds)
  const passwordHash = await bcrypt.hash(body.password, salt)

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash
  })

  const savedUser = await user.save()

  res.json(savedUser)
}

const getAll = async (req, res) => {
  const users = await User.find({})
  res.json(users)
}

module.exports = { createUser, getAll }
