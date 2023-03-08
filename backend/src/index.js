const express = require('express')
const app = express()
const cors = require('cors')
const usuariosRouter = require('./routes/usuario')
const mascotasRouter = require('./routes/mascota')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser({ sameSite: 'none' }))

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

app.use('/api/mascotas', mascotasRouter)
app.use('/api/usuarios', usuariosRouter)
app.use(express.static('build'))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
