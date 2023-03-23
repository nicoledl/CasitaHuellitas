/* eslint-disable react/jsx-closing-tag-location */
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-grid-system'
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'

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
  const [menuHorizontal, setMenuHorizontal] = useState(false)

  const handleClick = () => {
    setMenuHorizontal(!menuHorizontal)
  }

  return (
    <>
      {pantallaEscritorio
        ? (
          <Container id='navbar' fluid>
            <Link className='boton-ch' to='/' style={{ color: '#fff' }}>C.H.</Link>
            <Row className='navbar' style={{ width: '70%' }}>
              <Col className='col' sm={2} md={2} style={columna}>
                <Link to='/'>Inicio</Link>
              </Col>
              <Col className='col' sm={3} md={3} style={columna}>
                <Link to='/adoptar'>Huellitas</Link>
              </Col>
              <Col className='col' sm={4} md={4} style={columna}>
                <Link to='/info-pre-adopcion'>Información<br />Pre-adopción</Link>
              </Col>
              <Col className='col' sm={3} md={3} style={columna}>
                <Link to='/ingreso'>Ingreso</Link>
              </Col>
            </Row>
          </Container>)
        : (<div id='navbar-horizontal'>
          <div className='navbar-horizontal-content'>
            <Link className='boton-ch' to='/' style={{ color: '#fff' }}>C.H.</Link>
            <button onClick={handleClick}><FaChevronUp className={menuHorizontal ? 'boton-onclick' : 'boton'} /></button>
          </div>
          {menuHorizontal && (
            <div className='menu-horizontal'>
              <Link to='/'>Inicio</Link>
              <Link to='/adoptar'>Huellitas</Link>
              <Link to='/info-pre-adopcion'>Información Pre-adopción</Link>
              <Link to='/ingreso'>Ingreso</Link>
            </div>
          )}
        </div>)}
    </>
  )
}

export default Navbar
