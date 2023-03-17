import { useForm } from 'react-hook-form'
import axios from 'axios'
import Modal from '../commons/Modal'
import { Col, Row } from 'react-grid-system'
import { useState } from 'react'

const Formulario = (setActualizacion, actualizacion) => {
  const { register, handleSubmit } = useForm()
  const [cerrarModal, setCerrarModal] = useState(false)
  const onSubmit = async datos => {
    try {
      await axios.post('http://localhost:3001/api/mascotas', datos, { withCredentials: true })
      console.log('Datos enviados exitosamente')
      setActualizacion(!actualizacion)
    } catch (error) {
      console.error('Error al enviar los datos:', error)
    }
  }
  const handleClose = () => {
    setCerrarModal()
  }
  const date = new Date().toLocaleString()
  const estiloBoton = { backgroundColor: '#2dc5a4', border: 'none', borderRadius: '50px 50px 50px 50px', padding: 5, width: '65px', height: '65px', color: '#f5f5f5', fontSize: '40px', margin: 0, cursor: 'pointer' }

  const formularioMascota = () => {
    return (
      <form id='formulario-mascota' onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm={12}>
            <h1>Ingresar nueva huellita</h1>
          </Col>
          <Col sm={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <p>Animal: </p>
            <select {...register('animal')}>
              <option value='Perro'>Perro</option>
              <option value='Gato'>Gato</option>
            </select>
          </Col>
          <Col sm={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <p>Animal: </p>
            <input type='text' placeholder='Nombre' {...register('name', { required: false, maxLength: 100 })} />
          </Col>
          <Col sm={12}>
            <textarea type='text' placeholder='Nota' {...register('note', { required: false })} />
          </Col>
          <Col sm={6}>
            <label>
              *Importante:
              <input type='checkbox' placeholder='Importante' defaultChecked={false} {...register('important', {})} />
              <p style={{ fontSize: '10px' }}>*Si el animal se encuentra en una situción critica.</p>
            </label>
          </Col>
          <Col sm={6}>
            <label>
              *Adoptado:
              <input type='checkbox' placeholder='Importante' defaultChecked={false} {...register('adopted', {})} />
              <p style={{ fontSize: '10px' }}>*No marcar si esta mascota no fue adoptada aún.</p>
            </label>
          </Col>
          <Col>
            <input type='hidden' value={date} {...register('date', {})} />
          </Col>
          <Col sm={12}>
            <button className='boton-submit' onClick={handleClose}>Agregar</button>
          </Col>
        </Row>
      </form>
    )
  }

  return (
    <div id='carta-mascota-nueva'>
      <Modal contenido={formularioMascota()} textoDelBoton='+' estiloDelBoton={estiloBoton} estadoModal={cerrarModal} />
    </div>
  )
}

export default Formulario
