const mongoose = require('mongoose')

const solicitudAdopcionSchema = new mongoose.Schema({
  nombre: {
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
  telefono: {
    type: String,
    required: true
  },
  animal: {
    type: String,
    required: true
  },
  nombre_animal: {
    type: String,
    required: true
  },
  edad_animal: {
    type: Number,
    required: true
  },
  notas: {
    type: String
  },
  questions: {
    type: [
      {
        pregunta: String,
        respuesta: String
      }
    ]
  },
  fecha_solicitud: {
    type: Date,
    default: Date.now
  }
})

const SolicitudAdopcion = mongoose.model('SolicitudAdopcion', solicitudAdopcionSchema, 'solicitudesAdopcion')

module.exports = { SolicitudAdopcion }
