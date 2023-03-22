import { Col, Container, Row } from 'react-grid-system'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <Container id='footer' fluid>
      <Container className='footer-content'>
        <Row className='row'>
          <Col className='col' md={4}>
            <div>
              <h3>C.H.</h3>
              <p>Buenos Aires, Argentina.🇦🇷</p>
              <p>Av. campito casita huellitas 1234</p>
              <p>Tel. +1145454545</p>
              <p>campitocasitahuellitas@mail.com</p>
            </div>
          </Col>
          <Col className='col' md={4}>
            <div>
              <h3>Navega</h3>
              <Link to='/adoptar'>Adoptar</Link>
              <Link to='/donaciones'>Donaciones</Link>
              <Link to='/info-pre-adopcion'>Info pre-adopción</Link>
            </div>
          </Col>
          <Col className='col' md={4}>
            <div>
              <h3>Seguinos</h3>
              <span><FaInstagram /><p>@campitocasitahuellitas</p></span>
              <span><FaFacebookSquare /><p>Campito Casita Huellitas</p></span>
              <span><FaTwitterSquare /><p>@campitocasitahuellitas</p></span>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Footer
