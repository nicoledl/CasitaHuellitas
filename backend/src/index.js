const express = require('express')
const app = express()
const cors = require('cors')
const usuariosRouter = require('./routes/usuario')
const mascotasRouter = require('./routes/mascota')
const cookieParser = require('cookie-parser')
const { connectToDB } = require('./mongo')

app.use(express.json())
app.use(cookieParser({ sameSite: 'none' }))

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
)

// Conectarse a la base de datos antes de iniciar el servidor
connectToDB()
  .then(() => {
    console.log('Connected to the database')

    // Rutas y middleware adicionales
    app.use('/api/usuarios', usuariosRouter)
    app.use('/api/mascotas', mascotasRouter)
    app.use(express.static('build'))

    const PORT = process.env.PORT || 3001

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error)
  })
