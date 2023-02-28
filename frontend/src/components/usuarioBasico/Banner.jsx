import { Col, Container, Row } from 'react-grid-system'
import './estiloBanner.css'

const Banner = () => {
  return (
    <Container id='containerBanner'>
      <Row align='start'>
        <Col md={12}>
          <h1>Conocé nuestras huellitas en busca de una casita...</h1>
        </Col>
        <Col md={12}>
          <p>y dejá su huellita marcada en tú corazón...</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Banner
