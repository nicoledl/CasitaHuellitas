const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', false)
const mongoDB = process.env.MONGODB_ATLAS

async function connectToDB () {
  try {
    await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Connected to the database!')

    // // Obtener la lista de colecciones
    // const collections = await mongoose.connection.db.listCollections().toArray()
    // console.log('Collections:', collections.map(collection => collection.name))
  } catch (error) {
    console.error('Failed to connect to the database:', error)
  }
}

module.exports = { connectToDB }
