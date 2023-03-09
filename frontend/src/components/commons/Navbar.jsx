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
        <Row style={{ width: '60%' }}>
          <Col sm={4} md={4} style={columna}>
            <Link to='/'>Ingreso</Link>
          </Col>
          <Col sm={4} md={4} style={columna}>
            <Link to='/huellitas'>Huellitas</Link>
          </Col>
          <Col sm={4} md={4} style={columna}>
            <Link to='/contacto'>Contacto</Link>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default Navbar
