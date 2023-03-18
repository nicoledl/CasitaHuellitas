import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-grid-system'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../App'
import imagenPerro from '../../assets/perro-default.jpg'
import imagenGato from '../../assets/gato-default.jpg'
import { Oval } from 'react-loader-spinner'

const imagenEstilo = { height: '50%', width: '100%', borderRadius: '8px 8px 0px 0px', objectFit: 'cover' }
const containerTarjeta = { height: '25%', display: 'grid', justifyContent: 'center', alignItems: 'center', paddingBottom: 8 }

const ListaMascotas = () => {
  const { dataMascota } = useContext(AppContext)
  const navigate = useNavigate()
  const [mascotas, setMascotas] = useState([])
  const baseUrl = 'http://localhost:3001'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/mascotas/en-adopcion`)
        setMascotas(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const hanldeClick = (mascota) => {
    dataMascota(mascota)
    navigate('/formulario-adopcion')
  }

  if (mascotas[0] === undefined) {
    return (
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Oval
          height={100}
          width={100}
          color='#1379BD'
          wrapperStyle={{}}
          wrapperClass=''
          visible
          ariaLabel='oval-loading'
          secondaryColor='#1379BD'
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </Container>
    )
  }

  return (
    <Container>
      <Row>
        {
          mascotas.map((mascota) => {
            const fecha = new Date(mascota.date)
            const fechaISO = fecha.toISOString().substring(0, 10)

            return (
              <Col id='display-de-mascota' sm={12} md={6} xl={4} xxl={3} key={mascota._id}>
                <div id='carta-mascota'>
                  <img alt={mascota.name} src={mascota.animal === 'Perro' ? imagenPerro : imagenGato} style={imagenEstilo} />
                  <div style={containerTarjeta}>
                    {mascota.name === null ? <p style={{ fontSize: 'x-large' }}>No se le asignó un nombre.</p> : <p style={{ fontSize: 'x-large' }}>Nombre: {mascota.name}</p>}
                    <p>Ingreso: {fechaISO}</p>
                  </div>
                  <div className='boton-adoptar' onClick={() => hanldeClick(mascota)}>
                    <p>ADOPTAR</p>
                  </div>
                </div>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}

export default ListaMascotas
