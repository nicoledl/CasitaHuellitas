import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useContext, useState } from 'react'
import { AppContext } from '../../App'
import { Col, Container, Row } from 'react-grid-system'

const Formulario = () => {
  const { estado, cambiarEstado } = useContext(AppContext)
  const { register, handleSubmit, reset } = useForm()
  const [isOpen, setIsOpen] = useState(false)
  const onSubmit = async datos => {
    console.log(datos)

    try {
      await axios.post('http://localhost:3001/api/mascotas', datos, { withCredentials: true })
      console.log('Datos enviados exitosamente')
      cambiarEstado(!estado)
      setIsOpen(false)
      reset()
    } catch (error) {
      console.error('Error al enviar los datos:', error)
    }
  }

  const estiloBoton = { backgroundColor: '#2dc5a4', border: 'none', borderRadius: '50px 50px 50px 50px', padding: 5, width: '65px', height: '65px', color: '#f5f5f5', fontSize: '40px', margin: 0, cursor: 'pointer' }

  const handleClose = () => {
    setIsOpen(false)
    reset()
  }

  const formularioMascota = () => {
    const date = new Date().toLocaleString()
    return (
      <div id='modal'>
        <div className='modal'>
          <div className='modal-content'>
            <form id='formulario-mascota' onSubmit={handleSubmit(onSubmit)}>
              <Container style={{ maxWidth: '1200px' }}>
                <h3 style={{ marginBottom: '10px', textAlign: 'center' }}>Agregar Huellita</h3>
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
                    <input type='text' placeholder='Raza' {...register('breed')} />
                  </Col>
                  <Col xs={12} sm={6} md={6}>
                    <p>Nombre: </p>
                    <input type='text' placeholder='Nombre' {...register('name')} />
                  </Col>
                </Row>

                <p>Nota: </p>
                <textarea type='text' placeholder='Nota' {...register('note')} style={{ width: '100%' }} />

                <Row style={{ display: 'flex' }}>
                  <Col xs={12} sm={6} md={6}>
                    <label>
                      *Importante:
                      <select placeholder='Importante' {...register('important', {})} style={{ marginLeft: '5px' }}>
                        <option value='false'>-</option>
                        <option value='true'>Importante</option>
                      </select>
                      <p style={{ fontSize: '10px', marginBottom: '10px', color: 'grey' }}>*Si el animal se encuentra en una situción critica.</p>
                    </label>
                  </Col>
                  <Col xs={12} sm={6} md={6}>
                    <label>
                      *Apto para adopción:
                      <select placeholder='En Adopción' {...register('inAdoption', {})} style={{ marginLeft: '5px' }}>
                        <option value='false'>-</option>
                        <option value='true'>Apto</option>
                      </select>
                      <p style={{ fontSize: '10px', marginBottom: '10px', color: 'grey' }}>*No marcar si este animal no está apto para ser adoptado.</p>
                    </label>
                  </Col>
                </Row>
                <input type='hidden' value={date} {...register('date', {})} />
                <Row style={{ display: 'flex' }}>
                  <Col xs={6} sm={6} md={6}>
                    <button type='submit' className='boton-submit'>Agregar</button>
                  </Col>
                  <Col xs={6} sm={6} md={6}>
                    <button onClick={handleClose} className='boton-cancelar'>Cancelar</button>
                  </Col>
                </Row>
              </Container>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id='carta-mascota-nueva'>
      <button onClick={() => setIsOpen(true)} style={estiloBoton}>+</button>
      {isOpen && formularioMascota()}
    </div>
  )
}

export default Formulario
