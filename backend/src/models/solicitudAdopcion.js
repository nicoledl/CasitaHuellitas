const mongoose = require('mongoose')

const adoptionRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  dni: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      },
      message: props => `${props.value} no es una dirección de correo electrónico válida!`
    }
  },
  address: {
    type: String,
    required: true
  },
  questions: {
    type: [
      {
        question: String,
        answer: String
      }
    ]
  },
  date: {
    type: Date
  },
  pet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet'
  }
})

const AdoptionRequest = mongoose.model('SolicitudAdopcion', adoptionRequestSchema, 'solicitudesAdopcion')

module.exports = { AdoptionRequest }
