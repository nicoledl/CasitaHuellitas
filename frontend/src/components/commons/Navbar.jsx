import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-grid-system'
import { useMediaQuery } from 'react-responsive'

const columna = {
  paddingTop: '5px',
  paddingBottom: '5px'
}

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

const Navbar = () => {
  const pantallaEscritorio = useMediaQuery({ minWidth: breakpoints.md })

  return (
    <Container id='navbar' fluid>
      {pantallaEscritorio && (
        <Row style={{ width: '70%' }}>
          <Col sm={3} md={3} style={columna}>
            <Link to='/inicio'>Inicio</Link>
          </Col>
          <Col sm={3} md={3} style={columna}>
            <Link to='/mascotas-en-adopcion'>Huellitas</Link>
          </Col>
          <Col sm={3} md={3} style={columna}>
            <Link to='/info-pre-adopcion'>Información Pre-adopción</Link>
          </Col>
          <Col sm={3} md={3} style={columna}>
            <Link to='/'>Ingreso</Link>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default Navbar
