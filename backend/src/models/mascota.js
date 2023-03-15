const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
  animal: {
    type: String
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
    type: Date
  },
  important: {
    type: Boolean
  },
  adopted: {
    type: Boolean
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const Pet = mongoose.model('Mascota', petSchema, 'mascotas')

module.exports = { Pet }
