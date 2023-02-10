const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
  animal: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  note: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: true
  },
  important: {
    type: Boolean,
    required: true
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const Pet = mongoose.model('Mascotas', petSchema)

module.exports = { Pet }
