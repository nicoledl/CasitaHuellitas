import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-grid-system'

const fotoEstilo = { height: '40%', width: '100%', backgroundImage: 'url("https://www.losandes.com.ar/resizer/y0Wk3IFldMN3a3cWckXfWteP7UI=/1023x1364/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/UOWLL6J6LBFLNI6CU7RNBZSYCE.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 0px 0px' }

const botonera = { backgroundColor: '#1379bd', height: '20%', borderRadius: '0px 0px 8px 8px', margin: 0, color: '#f5f5f5' }

const ListaMascotas = () => {
  const [mascotas, setMascotas] = useState([])
  const [editar, setEditar] = useState(false)
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

  if (mascotas.length === 0) {
    return <p>Cargando mascotas...</p>
  }

  return (
    <Container id='container-mascotas'>
      <Row>
        {mascotas.map((mascota) => {
          const fecha = new Date(mascota.date)
          const fechaISO = fecha.toISOString().substring(0, 10)

          return (
            <Col id='display-de-mascota' xs={12} sm={6} md={4} xl={3} key={mascota._id}>

              {editar && id === mascota._id
                ? (
                  <div id='carta-mascota'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <select defaultValue={mascota.animal} {...register('animal')}>
                        <option value='Perro'>Perro</option>
                        <option value='Gato'>Gato</option>
                        <option value='Ave'>Ave</option>
                        <option value='Ruedor'>Ruedor</option>
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

                : (

                  <div id='carta-mascota'>

                    <div style={fotoEstilo} />

                    <div style={{ height: '40%' }}>
                      <p style={{ height: '10%' }}>Animal: {mascota.animal}</p>
                      {mascota.name === undefined ? 'No se le asignó un nombre.' : <p style={{ height: '10%' }}>Nombre: {mascota.name}</p>}
                      <label>
                        Nota:
                        <p style={{ height: '30%' }}>{mascota.note}</p>
                        {mascota.important
                          ? (
                            <p style={{ height: '15%' }}>Situacion de importancia.</p>
                            )
                          : (
                              false
                            )}
                      </label>
                      <p style={{ height: '8%' }}>Ingreso: {fechaISO}</p>
                    </div>

                    <Row style={botonera}>
                      <Col onClick={() => borrarMascota(mascota._id)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        Eliminar
                      </Col>
                      <Col onClick={() => onEdit(mascota._id)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        Editar
                      </Col>
                    </Row>

                  </div>

                  )}

            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default ListaMascotas
