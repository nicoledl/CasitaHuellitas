import axios from 'axios'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-grid-system'
import { FallingLines } from 'react-loader-spinner'
import { useMediaQuery } from 'react-responsive'

const estiloCentrar = { display: 'flex', justifyContent: 'center', alignContent: 'center' }

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

const RegistroSolicitudes = () => {
  // eslint-disable-next-line no-unused-vars
  const [solicitudes, setSolicitudes] = useState(null)
  const [estados, setEstados] = useState({})
  const [showContent, setShowContent] = useState(false)
  const pantallaCelular = useMediaQuery({ maxWidth: breakpoints.lg })
  const baseUrl = 'http://localhost:3001'

  useEffect(() => {
    async function fetchData () {
      try {
        const responseSolicitudes = await axios.get(`${baseUrl}/api/solicitudes-adopcion`)
        setSolicitudes(responseSolicitudes.data)
      } catch (error) {
        console.error('Error al cargar registro', error)
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  setTimeout(() => {
    setShowContent(true)
  }, 3000)

  const handleClick = (id) => {
    setEstados((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }))
  }

  function fecha (date) {
    const fecha = new Date(date)
    const fechaISO = fecha.toISOString().substring(0, 10)
    return fechaISO
  }

  const registro = (solicitud) => {
    if (!solicitud) {
      return null
    }
    
    return (
      <Row key={solicitud._id} className='fila-registro'>
        <Col>
          <p>{solicitud.name} {solicitud.lastname}</p>
        </Col>
        <Col>
          <p>{solicitud.dni}</p>
        </Col>
        <Col sm={2} md={2}>
          <p>{solicitud.email}</p>
        </Col>
        <Col>
          <p>{solicitud.phone}</p>
        </Col>
        <Col sm={2} md={2}>
          <p>{solicitud.address}</p>
        </Col>
        <Col>
          <p>{solicitud.name}</p>
        </Col>
        <Col>
          <p>{fecha(solicitud.date)} / </p>
        </Col>
      </Row>
    )
  }

  const wrapData = (datos) => {
    return (
      <>
        <Row className='fila-registro'>
          <Col>
            <p><b>DNI:</b><br /> {datos.dni}</p>
            <p><b>Mail:</b><br /> {datos.email}</p>
            <p><b>Contacto:</b><br /> {datos.phone}</p>
            <p><b>Dirección:</b><br /> {datos.address}</p>
          </Col>
          <Col>
            <p><b>Ingreso/Egreso:</b></p>
            {/* <p>{fecha(datos.pet.date)} / {fecha(datos.date)}</p> */}
          </Col>
        </Row>
      </>
    )
  }

  if (solicitudes == null) {
    return (
      <Container id='resgitro-adoptados-cargando'>
        {showContent
          ? <p>No hay solicitudes de adopción aún...</p>
          : (
            <FallingLines
              color='#FFCC4E'
              width='200'
              visible
              ariaLabel='falling-lines-loading'
            />)}
      </Container>
    )
  }

  return (
    <Container fluid id='container-adopciones' style={estiloCentrar}>
      {pantallaCelular
        ? (
          <Container className='container-registros'>
            <Row className='fila-datos'>
              <Col>
                <p>Adoptante</p>
              </Col>
              <Col>
                <p>Mascota</p>
              </Col>
            </Row>
            {solicitudes.map((solicitud, _i) => {
              const id = solicitud._id
              const mostrarDatos = estados[id] || false

              return (
                <div key={id} style={{ padding: 0 }}>
                  <Row onClick={() => handleClick(id)} className='fila-registro'>
                    <Col>
                      <p>{solicitud.name} {solicitud.lastname}</p>
                    </Col>
                    <Col>
                      {/* <p>{solicitud.pet.name}</p> */}
                    </Col>
                  </Row>
                  {mostrarDatos && wrapData(solicitud)}
                </div>
              )
            })}
          </Container>)
        : (
          <Container className='container-registros'>
            <Row className='fila-datos'>
              <Col>
                <p>Adoptante</p>
              </Col>
              <Col>
                <p>DNI</p>
              </Col>
              <Col sm={2} md={2}>
                <p>Mail</p>
              </Col>
              <Col>
                <p>Contacto</p>
              </Col>
              <Col sm={2} md={2}>
                <p>Domicilio</p>
              </Col>
              <Col>
                <p>Mascota</p>
              </Col>
              <Col>
                <p>Ingreso/Egreso</p>
              </Col>
            </Row>
            {solicitudes.map((solicitud) => registro(solicitud))}
          </Container>)}
    </Container>
  )
}

export default RegistroSolicitudes
