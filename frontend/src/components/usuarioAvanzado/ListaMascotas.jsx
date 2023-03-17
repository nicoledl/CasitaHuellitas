import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-grid-system'
import imagenPerro from '../../assets/perro-default.jpg'
import imagenGato from '../../assets/gato-default.jpg'
import Modal from '../commons/Modal'
import Formulario from './FormularioDeMascota'
import FormularioDeAdoptantes from './FormularioDeAdoptantes'

const imagenEstilo = { height: '50%', width: '100%', borderRadius: '8px 8px 0px 0px', objectFit: 'cover' }
const containerTarjeta = { height: '25%', display: 'grid', justifyContent: 'center', alignItems: 'center', paddingBottom: 8 }
const botonera = { backgroundColor: '#1379bd', height: '22%', borderRadius: '0px 0px 8px 8px', margin: 0, color: '#f5f5f5' }
const estiloBoton = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', cursor: 'pointer', margin: 0, background: 'none', border: 'none', color: '#f5f5f5', fontSize: 'large', fontFamily: "'Questrial', sans-serif" }

const ListaMascotas = () => {
  const [mascotas, setMascotas] = useState([])
  const [editar, setEditar] = useState(false)
  const [imagen, setImagen] = useState(false)
  const [actualizacion, setActualizacion] = useState(false)
  const [id, setId] = useState('')
  const { register, handleSubmit } = useForm()
  const baseUrl = 'http://localhost:3001'

  useEffect(() => {
    axios.get(`${baseUrl}/api/mascotas`)
      .then((res) => setMascotas(res.data))
      .catch((error) => console.error(error))
  }, [actualizacion])

  const onEdit = (mascotaId) => {
    setId(mascotaId)
    setEditar(true)
  }

  const onSubmit = async datos => {
    try {
      await axios.put(`${baseUrl}/api/mascotas/${id}`, datos)
      setEditar(!editar)
      setActualizacion(!actualizacion)
    } catch (error) {
      console.error('Error al modificar los datos:', error)
    }
  }

  const borrarMascota = (id) => {
    axios.delete(`${baseUrl}/api/mascotas/${id}`)
      .then(() => setActualizacion(!actualizacion))
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
          type='hidden'
          // type='file'
          accept='.jpg,.png,.jpeg'
          name='upload-imagen'
          id='imagen'
          onChange={handleChange}
        />
        <div className='container-formulario-editar'>
          <Row>
            <form className='formulario-editar' onSubmit={handleSubmit(onSubmit)}>
              <h1 style={{ color: '#2dc5a4', fontSize: '20px' }}>EDITAR</h1>
              <Col md={12}>
                <p>Animal: </p>
                <select defaultValue={mascota.animal} {...register('animal')}>
                  <option value='Perro'>Perro</option>
                  <option value='Gato'>Gato</option>
                </select>
              </Col>
              <Col md={12} style={{ flexFlow: 'column' }}>
                <p style={{ margin: 0, justifyContent: 'initial', display: 'flex' }}>Nombre:</p>
                <input type='text' placeholder='Nombre' defaultValue={mascota.name} {...register('name', { required: false, maxLength: 100 })} />
              </Col>
              <Col>
                <textarea
                  type='text'
                  placeholder='Nota'
                  defaultValue={mascota.note}
                  {...register('note')}
                />
              </Col>
              <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                <label>Importante:</label>
                <input
                  type='checkbox'
                  placeholder='Importante'
                  defaultChecked={mascota.important ? 'true' : false}
                  {...register('important', {})}
                />
              </Col>
              <Col style={{ gap: 20 }}>
                <button className='boton-submit'>Editar</button>
                <button className='boton-submit' style={{ backgroundColor: '#d70000' }} onClick={() => setEditar(!editar)}>Cancelar</button>
              </Col>
            </form>
          </Row>
        </div>
      </div>
    )
  }

  return (
    <Container id='container-mascotas'>
      <Row>
        <Col id='display-de-mascota' sm={12} md={6} xl={4} xxl={3}>
          <Formulario setActualizacion={setActualizacion} actualizacion={actualizacion} />
        </Col>
        {mascotas.map((mascota) => {
          const fecha = new Date(mascota.date)
          const fechaISO = fecha.toISOString().substring(0, 10)

          return (
            <Col id='display-de-mascota' sm={12} md={6} xl={4} xxl={3} key={mascota._id}>

              {editar && id === mascota._id
                ? (listaDeMascotas(mascota))
                : (
                  <div id='carta-mascota'>
                    <img alt={mascota.name} src={mascota.animal === 'Perro' ? imagenPerro : mascota.animal === 'Gato' ? imagenGato : imagen.name} style={imagenEstilo} />
                    <div style={containerTarjeta}>
                      <p>Animal: {mascota.animal}</p>
                      {mascota.name === null ? <p>No se le asignó un nombre.</p> : <p>Nombre: {mascota.name}</p>}
                      {mascota.important && <p style={{ color: '#d70000' }}>Situación delicada.</p>}
                      <p>Ingreso: {fechaISO}</p>
                    </div>
                    <Row style={botonera}>
                      <Col sm={4}>
                        <p onClick={() => borrarMascota(mascota._id)} style={estiloBoton}>ELIMINAR</p>
                      </Col>
                      <Col sm={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Modal titulo='NOTA:' contenido={mascota._id ? mascota.note : <p>No hay nota...</p>} textoDelBoton='NOTA' estiloDelBoton={estiloBoton} />
                      </Col>
                      <Col sm={4}>
                        <div onClick={() => onEdit(mascota._id)} style={estiloBoton}>EDITAR</div>
                      </Col>
                      <Col sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: 'solid 2px #0e6299', borderRadius: '0 0 8px 8px', backgroundColor: '#2dc5a4' }}>
                        {mascota.important ? <p style={estiloBoton}>Aún no se puede adoptar</p> : <FormularioDeAdoptantes estiloDeBoton={estiloBoton} mascota={mascota} />}
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
