const { MongoClient } = require('mongodb')
require('dotenv').config()

const uri = process.env.MONGODB_ATLAS
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, keepAlive: true })

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
