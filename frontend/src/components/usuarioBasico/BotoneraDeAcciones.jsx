import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import { Link } from 'react-router-dom'
import imagen from '../../assets/banner2.jpg'

const BotoneraDeAcciones = () => {
  const imagenHogar = 'https://resizer.glanacion.com/resizer/nxQ2S7e-Y0eemPKm-ASvm_lC2jc=/1200x800/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/3EP2T2RDLRGD5LPWUXNNZRKITU.jpg'
  const imagenDonacion = 'https://media.istockphoto.com/id/1250318540/es/foto/doberman-dobermann-pata-de-perro-en-la-palma-de-una-mano-humana-de-cerca-sobre-un-fondo-de.jpg?s=612x612&w=0&k=20&c=lQvxgQLYhGW-zufjZUQxWd-DEcTJK-gLIMzqjwlVo4s='
  const fondoBoton = (url) => {
    return { backgroundImage: `url('${url}')` }
  }

  return (
    <Container id='botonera-de-acciones'>
      <Container className='botonera-de-acciones-content'>
        <Row className='row' justify='center'>
          <Col sm={12} md={5} lg={3} className='col' style={fondoBoton(imagenHogar)}>
            <Link to='/hogardetransito' style={{ width: '100%', height: '100%' }}>
              <div>
                <p>¿Querés ser hogar de transito?<br />Haz click para más información</p>
              </div>
            </Link>
          </Col>
          <Col sm={12} md={5} lg={3} className='col' style={fondoBoton(imagen)}>
            <Link to='/adoptar' style={{ width: '100%', height: '100%' }}>
              <div>
                <p>Hora de conocer a nuestras Huellitas.</p>
              </div>
            </Link>
          </Col>
          <Col sm={12} md={10} lg={3} className='col' style={fondoBoton(imagenDonacion)}>
            <Link to='/donaciones' style={{ width: '100%', height: '100%' }}>
              <div>
                <p>La unión de pequeñas personas y acciones puede cambiar el mundo.<br />Haz tu donación aquí.</p>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default BotoneraDeAcciones
