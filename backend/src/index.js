const express = require('express')
const app = express()
const cors = require('cors')
const { connectToDB } = require('./mongo')
const usuariosRouter = require('./routes/usuario')
const mascotasRouter = require('./routes/mascota')

app.use(express.json())
app.use(cors())

connectToDB()

app.use('/api/mascotas', mascotasRouter)
app.use('/api/users', usuariosRouter)
app.use(express.static('build'))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
