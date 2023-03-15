const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: false,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      },
      message: props => `${props.value} no es una dirección de correo electrónico válida!`
    }
  },
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  dni: {
    type: Number,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  address: {
    type: String
  },
  date: {
    type: Date
  },
  pet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet'
  }
})

const Adopter = mongoose.model('Adoptante', userSchema, 'adoptantes')

module.exports = { Adopter }
