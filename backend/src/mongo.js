const mongoose = require('mongoose')
require('dotenv').config()

const connectToDB = () => {
  mongoose.connect(
    process.env.MONGODB_ATLAS,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) {
        console.error('Error connecting to MongoDB:', err)
      } else {
        console.log('Successfully connected to MongoDB')
      }
    }
  )
}

module.exports = { connectToDB }
