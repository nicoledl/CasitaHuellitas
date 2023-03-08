const { validateToken } = require('../config/token')

function validateAuth (req, res, next) {
  const token = req.cookies.token
  if (!token) return res.sendStatus(401)

  const { _id } = validateToken(token)
  if (!_id) return res.sendStatus(401)

  req._id = _id
  next()
}

module.exports = { validateAuth }
