import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-grid-system'
import { AppContext } from '../../App'
import imagenPerro from '../../assets/perro-default.png'
import imagenGato from '../../assets/gato-default.png'
import Formulario from './FormularioDeMascota'

const imagenEstilo = { height: '50%', width: '100%', borderRadius: '8px 8px 0px 0px', objectFit: 'cover' }
const containerTarjeta = { height: '25%', display: 'grid', justifyContent: 'center', alignItems: 'center', paddingBottom: 8 }
const botonera = { backgroundColor: '#292929', height: '22%', borderRadius: '0px 0px 8px 8px', margin: 0, color: '#f5f5f5', fontWeight: '600' }
const estiloBoton = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', fontWeight: '600', cursor: 'pointer', margin: 0, background: 'none', border: 'none', color: '#f5f5f5', fontSize: 'large', fontFamily: "'Questrial', sans-serif" }

const ListaMascotas = ({ onClose }) => {
  const { estado, cambiarEstado, mascota, dataMascota } = useContext(AppContext)
  const [mascotas, setMascotas] = useState([])
  const [imagen, setImagen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState('')
  const { register, handleSubmit, reset } = useForm()
  const baseUrl = 'http://localhost:3001'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/mascotas`)
        setMascotas(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [estado])

  const onSubmit = async datos => {
    try {
      console.log(datos)
      await axios.put(`${baseUrl}/api/mascotas/${id}`, datos)
      cambiarEstado(!estado)
      setIsOpen(false)
    } catch (error) {
      console.error('Error al modificar los datos:', error)
    }
    reset()
  }

  const borrarMascota = (id) => {
    axios.delete(`${baseUrl}/api/mascotas/${id}`)
      .then(() => cambiarEstado(!estado))
      .catch((error) => console.error(error))
  }

  const handleClick = (mascota) => {
    dataMascota(mascota)
    setId(mascota._id)
    setIsOpen(true)
  }

  // eslint-disable-next-line no-unused-vars
  const handleClose = () => {
    setIsOpen(false)
    reset()
  }

  // eslint-disable-next-line no-unused-vars
  const handleChange = (event) => {
    const file = event.target.files[0]
    setImagen(file)
  }

  if (mascotas.length === 0) {
    return (
      <Container id='container-mascotas'>
        <Row>
          <Col id='display-de-mascota' xs={12} sm={6} md={6} xl={3}>
            <div style={{ width: '330px', height: '380px' }}>
              <Formulario />
            </div>
          </Col>
        </Row>
      </Container>
    )
  }

  const editarMascota = () => {
    return (
      <div id='modal'>
        <div className='modal'>
          <div className='modal-content'>
            <form id='formulario-mascota' onSubmit={handleSubmit(onSubmit)} key={mascota._id}>
              <Container style={{ maxWidth: '1200px' }}>
                <h3 style={{ marginBottom: '10px', textAlign: 'center' }}>Editar datos {mascota.name} </h3>
                <Row style={{ display: 'flex' }}>
                  <Col xs={12} sm={6} md={6}>
                    <p>Animal: </p>
                    <select defaultValue={mascota.animal} {...register('animal')}>
                      <option value='Perro'>Perro</option>
                      <option value='Gato'>Gato</option>
                    </select>
                  </Col>
                  <Col xs={12} sm={6} md={6}>
                    <p>Tamaño estimado: </p>
                    <select defaultValue={mascota.size} {...register('size')}>
                      <option value='Grande'>Grande</option>
                      <option value='Mediano'>Mediano</option>
                      <option value='Pequeño'>Pequeño</option>
                    </select>
                  </Col>
                </Row>

                <Row style={{ display: 'flex' }}>
                  <Col xs={12} sm={6} md={6}>
                    <p>Raza: </p>
                    <input type='text' placeholder='Raza' defaultValue={mascota.breed} {...register('breed')} />
                  </Col>
                  <Col xs={12} sm={6} md={6}>
                    <p>Nombre: </p>
                    <input type='text' placeholder='Nombre' defaultValue={mascota.name} {...register('name')} />
                  </Col>
                </Row>

                <p>Nota: </p>
                <textarea type='text' placeholder='Nota' defaultValue={mascota.note} {...register('note')} style={{ width: '100%' }} />

                <Row style={{ display: 'flex' }}>
                  <Col xs={12} sm={6} md={6}>
                    <label>
                      *Importante:
                      <input type='radio' placeholder='Importante' defaultValue={mascota.important} {...register('important', {})} style={{ marginLeft: '5px' }} />
                      <p style={{ fontSize: '10px', marginBottom: '10px', color: 'grey' }}>*Si el animal se encuentra en una situción critica.</p>
                    </label>
                  </Col>
                  <Col xs={12} sm={6} md={6}>
                    <label>
                      *Apto para adopción:
                      <input type='radio' placeholder='EnAdopcion' defaultValue={mascota.inAdoption} {...register('inAdoption', {})} style={{ marginLeft: '5px' }} />
                      <p style={{ fontSize: '10px', marginBottom: '10px', color: 'grey' }}>*No marcar si este animal no está apto para ser adoptado.</p>
                    </label>
                  </Col>
                </Row>
                <Row style={{ display: 'flex' }}>
                  <Col xs={6} sm={6} md={6}>
                    <button type='submit' className='boton-submit'>Editar</button>
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
    <Container id='container-mascotas'>
      <Row>
        <Col id='display-de-mascota' sm={12} md={6} xl={4} xxl={3}>
          <Formulario />
        </Col>
        {mascotas.map((mascotaData) => {
          const { _id, date, animal, name, important } = mascotaData
          const fecha = new Date(date)
          const fechaISO = fecha.toISOString().substring(0, 10)

          return (
            <Col id='display-de-mascota' sm={12} md={6} xl={4} xxl={3} key={_id}>
              <div id='carta-mascota'>
                <img alt={name} src={animal === 'Perro' ? imagenPerro : animal === 'Gato' ? imagenGato : imagen.name} style={imagenEstilo} />
                <div style={containerTarjeta}>
                  <p>Animal: {animal}</p>
                  {name === null ? <p>No se le asignó un nombre.</p> : <p>Nombre: {name}</p>}
                  {important && <p style={{ color: '#d70000' }}>Situación delicada.</p>}
                  <p>Ingreso: {fechaISO}</p>
                </div>
                <Row style={botonera}>
                  <Col sm={4}>
                    <p onClick={() => borrarMascota(_id)} style={estiloBoton}>ELIMINAR</p>
                  </Col>
                  <Col sm={4}>
                    <button onClick={() => handleClick(mascotaData)} style={estiloBoton}>EDITAR</button>
                    {isOpen && editarMascota()}
                  </Col>
                </Row>
              </div>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default ListaMascotas
