import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useContext } from 'react'
import { AppContext } from '../../App'
import { Col, Container, Row } from 'react-grid-system'
import Modal from '../commons/Modal'

const Formulario = () => {
  const { estado, cambiarEstado } = useContext(AppContext)
  const { register, handleSubmit } = useForm()
  const onSubmit = async datos => {
    try {
      await axios.post('http://localhost:3001/api/mascotas', datos, { withCredentials: true })
      console.log('Datos enviados exitosamente')
      cambiarEstado(!estado)
    } catch (error) {
      console.error('Error al enviar los datos:', error)
    }
  }

  const date = new Date().toLocaleString()
  const estiloBoton = { backgroundColor: '#2dc5a4', border: 'none', borderRadius: '50px 50px 50px 50px', padding: 5, width: '65px', height: '65px', color: '#f5f5f5', fontSize: '40px', margin: 0, cursor: 'pointer' }

  const formularioMascota = () => {
    return (
      <form id='formulario-mascota' onSubmit={handleSubmit(onSubmit)}>

        <Container style={{ maxWidth: '1200px' }}>
          <h3 style={{ marginBottom: '10px', textAlign: 'center' }}>Ingresar nueva huellita</h3>

          <Row style={{ display: 'flex' }}>
            <Col xs={12} sm={6} md={6}>
              <p>Animal: </p>
              <select {...register('animal')}>
                <option value='Perro'>Perro</option>
                <option value='Gato'>Gato</option>
              </select>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <p>Tamaño estimado: </p>
              <select {...register('size')}>
                <option value='Grande'>Grande</option>
                <option value='Mediano'>Mediano</option>
                <option value='Pequeño'>Pequeño</option>
              </select>
            </Col>
          </Row>

          <Row style={{ display: 'flex' }}>
            <Col xs={12} sm={6} md={6}>
              <p>Raza: </p>
              <input type='text' placeholder='Raza' {...register('breed', { required: false, maxLength: 100 })} />
            </Col>
            <Col xs={12} sm={6} md={6}>
              <p>Nombre: </p>
              <input type='text' placeholder='Nombre' {...register('name', { required: false, maxLength: 100 })} />
            </Col>
          </Row>

          <p>Nota: </p>
          <textarea type='text' placeholder='Nota' style={{ width: '100%' }} {...register('note', { required: false })} />

          <Row style={{ display: 'flex' }}>
            <Col xs={12} sm={6} md={6}>
              <label>
                *Importante:
                <input type='checkbox' placeholder='Importante' defaultChecked={false} {...register('important', {})} style={{ marginLeft: '5px' }} />
                <p style={{ fontSize: '10px', marginBottom: '10px', color: 'red' }}>*Si el animal se encuentra en una situción critica.</p>
              </label>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <label>
                *Apto para adopción:
                <input type='checkbox' placeholder='EnAdopcion' defaultChecked={false} {...register('inAdoption', {})} style={{ marginLeft: '5px' }} />
                <p style={{ fontSize: '10px', marginBottom: '10px', color: 'red' }}>*No marcar si esta mascota no es apta para ser adoptada.</p>
              </label>
            </Col>
          </Row>

          <input type='hidden' value={date} {...register('date', {})} />

          <button type='submit' className='boton-submit'>Agregar</button>

        </Container>
      </form>
    )
  }

  return (
    <div id='carta-mascota-nueva'>
      <Modal contenido={formularioMascota()} textoDelBoton='+' estiloDelBoton={estiloBoton} />
    </div>
  )
}

export default Formulario
