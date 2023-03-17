import axios from 'axios'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-grid-system'
import { FallingLines } from 'react-loader-spinner'
import { useMediaQuery } from 'react-responsive'

const estiloCentrar = { display: 'flex', justifyContent: 'center', alignContent: 'center', height: '100vh' }

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

const RegistroAdopciones = () => {
  const [adoptantes, setAdoptantes] = useState(null)
  const [estados, setEstados] = useState({})
  const pantallaCelular = useMediaQuery({ maxWidth: breakpoints.lg })
  const baseUrl = 'http://localhost:3001'

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await axios.get(`${baseUrl}/api/adoptantes`)
        setAdoptantes(response.data)
      } catch (error) {
        console.error('Error al cargar registro', error)
      }
    }

    fetchData()
  }, [])

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

  const registro = (persona) => {
    if (!persona) {
      return null
    }

    return (
      <Row key={persona._id} className='fila-registro'>
        <Col>
          <p>{persona.name} {persona.lastname}</p>
        </Col>
        <Col>
          <p>{persona.dni}</p>
        </Col>
        <Col sm={2} md={2}>
          <p>{persona.email}</p>
        </Col>
        <Col>
          <p>{persona.phone}</p>
        </Col>
        <Col sm={2} md={2}>
          <p>{persona.address}</p>
        </Col>
        <Col>
          <p>{persona.pet.name}</p>
        </Col>
        <Col>
          <p>{fecha(persona.pet.date)} / {fecha(persona.date)}</p>
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
            <p>{fecha(datos.pet.date)} / {fecha(datos.date)}</p>
          </Col>
        </Row>
      </>
    )
  }

  if (adoptantes == null) {
    return (
      <Container style={estiloCentrar}>
        <FallingLines
          color='#1379BD'
          width='100'
          visible
          ariaLabel='falling-lines-loading'
        />
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
            {adoptantes.map((persona, _i) => {
              const id = persona._id
              const mostrarDatos = estados[id] || false

              return (
                <div key={id} style={{ padding: 0 }}>
                  <Row onClick={() => handleClick(id)} className='fila-registro'>
                    <Col>
                      <p>{persona.name} {persona.lastname}</p>
                    </Col>
                    <Col>
                      <p>{persona.pet.name}</p>
                    </Col>
                  </Row>
                  {mostrarDatos && wrapData(persona)}
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
            {adoptantes.map((persona) => registro(persona))}
          </Container>)}
    </Container>
  )
}

export default RegistroAdopciones
