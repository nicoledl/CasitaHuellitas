import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-grid-system'
import imagenPerro from '../../assets/perro-default.jpg'
import imagenGato from '../../assets/gato-default.jpg'
import Modal from '../commons/Modal'
import Formulario from './FormularioDeMascota'

const imagenEstilo = { height: '50%', width: '100%', borderRadius: '8px 8px 0px 0px', objectFit: 'cover' }
const containerTarjeta = { height: '33%', display: 'grid', justifyContent: 'center', alignItems: 'center' }
const botonera = { backgroundColor: '#1379bd', height: '16.4%', borderRadius: '0px 0px 8px 8px', margin: 0, color: '#f5f5f5' }
const botones = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', cursor: 'pointer', margin: 0 }

const ListaMascotas = () => {
  const [mascotas, setMascotas] = useState([])
  const [editar, setEditar] = useState(false)
  const [imagen, setImagen] = useState(false)
  const [id, setId] = useState('')
  const { register, handleSubmit } = useForm()
  const baseUrl = 'http://localhost:3001'

  useEffect(() => {
    axios.get(`${baseUrl}/api/mascotas`)
      .then((res) => setMascotas(res.data))
      .catch((error) => console.error(error))
  }, [])

  const onEdit = (mascotaId) => {
    setId(mascotaId)
    setEditar(true)
  }

  const onSubmit = async datos => {
    try {
      await axios.put(`${baseUrl}/api/mascotas/${id}`, datos)
      console.log('Datos modificados exitosamente', datos)
      setEditar(!editar)
    } catch (error) {
      console.error('Error al modificar los datos:', error)
    }
  }

  const borrarMascota = (id) => {
    axios.delete(`${baseUrl}/api/mascotas/${id}`)
      .then((res) => console.log('Mascota eliminada'))
      .catch((error) => console.error(error))
  }

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

  const listaDeMascotas = (mascota) => {
    return (
      <div id='carta-mascota'>
        <input
          type='file'
          accept='.jpg,.png,.jpeg'
          name='upload-imagen'
          id='imagen'
          onChange={handleChange}
        />
        <form id='formulario-editar' onSubmit={handleSubmit(onSubmit)}>
          <select defaultValue={mascota.animal} {...register('animal')}>
            <option value='Perro'>Perro</option>
            <option value='Gato'>Gato</option>
          </select>
          <input type='text' placeholder='Nombre' defaultValue={mascota.name} {...register('name', { required: false, maxLength: 100 })} />
          <textarea
            type='text'
            placeholder='Nota'
            defaultValue={mascota.note}
            {...register('note', { maxLength: 100 })}
          />
          <label>
            Importante:
            <input
              type='checkbox'
              placeholder='Importante'
              defaultChecked={mascota.important ? 'true' : false}
              {...register('important', {})}
            />
          </label>
          <div>
            <button>Modificar</button>
            <button onClick={() => setEditar(!editar)}>Cancelar</button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <Container id='container-mascotas'>
      <Row>
        <Col id='display-de-mascota' xs={12} sm={6} md={6} xl={3}>
          <Formulario />
        </Col>
        {mascotas.map((mascota) => {
          const fecha = new Date(mascota.date)
          const fechaISO = fecha.toISOString().substring(0, 10)

          return (
            <Col id='display-de-mascota' xs={12} sm={6} md={6} xl={3} key={mascota._id}>

              {editar && id === mascota._id
                ? (listaDeMascotas(mascota))
                : (
                  <div id='carta-mascota'>

                    <img alt={mascota.name} src={mascota.animal === 'Perro' ? imagenPerro : mascota.animal === 'Gato' ? imagenGato : imagen.name} style={imagenEstilo} />
                    <div style={containerTarjeta}>
                      <p>Animal: {mascota.animal}</p>
                      {mascota.name === undefined ? 'No se le asignó un nombre.' : <p>Nombre: {mascota.name}</p>}
                      {mascota.important
                        ? (<p>Situacion de importancia.</p>)
                        : (false)}
                      <p>Ingreso: {fechaISO}</p>
                    </div>
                    <Row style={botonera}>
                      <Col>
                        <p onClick={() => borrarMascota(mascota._id)} style={botones}>ELIMINAR</p>
                      </Col>
                      <Col style={botones}>
                        <Modal Titulo='NOTA' contenido={mascota.note} textoDelBoton='NOTA' />
                      </Col>
                      <Col>
                        <p onClick={() => onEdit(mascota._id)} style={botones}>EDITAR</p>
                      </Col>
                    </Row>

                  </div>)}

            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default ListaMascotas
