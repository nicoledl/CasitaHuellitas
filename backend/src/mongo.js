const { MongoClient } = require('mongodb')
require('dotenv').config()

const client = new MongoClient(process.env.MONGODB_ATLAS, { useNewUrlParser: true, useUnifiedTopology: true, keepAlive: true })

const connectToDB = async () => {
  try {
    await client.connect()
    console.log('Connected to MongoDB')
    return client.db('CasitaHuellitas_DB')
  } catch (err) {
    console.error('Error connecting to MongoDB:', err)
    process.exit(1)
  }
}

module.exports = { connectToDB, client }
