const jwt = require('jsonwebtoken')

function authMiddleware (req, res, next) {
  const authHeader = req.headers.authorization
  if (authHeader) {
    const token = authHeader.split(' ')[1]
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Token inválido' })
      } else {
        req.user = { id: decoded.id }
        next()
      }
    })
  } else {
    res.status(401).json({ message: 'Token de autenticación no proporcionado' })
  }
}

module.exports = { authMiddleware }
