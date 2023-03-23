import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import { useMediaQuery } from 'react-responsive'
import Footer from '../components/commons/Footer'
import Navbar from '../components/commons/Navbar'

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

const Donaciones = () => {
  const pantallaEscritorio = useMediaQuery({ minWidth: breakpoints.md })

  return (
    <>
      <Navbar />
      <Container id={pantallaEscritorio ? 'container-donaciones' : 'container-donaciones-mq'} style={{ maxWidth: '800px' }}>
        <h1 style={{ marginTop: '20px', marginBottom: '20px', fontSize: 'clamp(1.8rem, 6.4vw - 1rem, 3rem)', color: '#FFCC4E' }}>¿Nos ayudás a ayudarlos?</h1>
        <p style={{ fontSize: '1.3rem' }}>Al dar una donación, no solo estás ayudando a proporcionar alimentos, refugio y atención médica a los animales necesitados, sino que también estás apoyando a los esfuerzos para educar a la comunidad sobre la importancia de la adopción responsable y la esterilización de mascotas.</p>
        <Container className={pantallaEscritorio ? 'donaciones-links' : 'donaciones-links-mq'}>
          <Row className='row'>
            <a className='col' href='https://mpago.la/2nu4tVb'>
              <Col md={12}><p>Link de $100</p></Col>
            </a>
            <a className='col' href='https://mpago.la/2nu4tVb'>
              <Col className='col' md={12}><p>Link de $500</p></Col>
            </a>
            <a className='col' href='https://mpago.la/2nu4tVb'>
              <Col className='col' md={12}><p>Link de $1000</p></Col>
            </a>
            <a className='col' href='https://mpago.la/2nu4tVb'>
              <Col className='col' md={12}><p>Link de $2000</p></Col>
            </a>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  )
}

export default Donaciones
