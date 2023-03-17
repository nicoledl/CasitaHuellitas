import { Col, Container, Row } from 'react-grid-system'

const BannerBienvenida = ({ usuario }) => {
  return (
    <Container id='banner-bienvenida-adm'>
      <Row className='row'>
        <Col className='col'>
          <h1>¡Hola {usuario.name}!</h1>
          <p>Como administrador/a, tendrás acceso a una serie de herramientas que te permitirán gestionar las mascotas que rescatamos y damos en adopción, así como los datos de las personas que las adoptan. También tendrás acceso a una herramienta de mensajería donde recibirás formularios de adopción de usuarios que quieren contactarse con nuestro refugio, y un calendario para programar citas con veterinarios, los postulados a adoptar y eventos.</p>
        </Col>
      </Row>
      <Row className='row'>
        <Col className='col'><p>Como administrador/a, tendrás un papel importante en la gestión de nuestra base de datos de animales y adoptantes, asegurándote de que esté actualizada y organizada de manera efectiva.</p></Col>
        <Col className='col'><p>El calendario también será una herramienta clave para la organización. Asegúrate de actualizarlo regularmente para que los usuarios puedan ver cuándo están disponibles los horarios para los chequeos médicos y otros eventos importantes.</p></Col>
      </Row>
      <Row className='row'>
        <Col className='col'><p>Esperamos que disfrutes trabajando con nosotros y ayudándonos a hacer una diferencia en la vida de las mascotas que rescatamos.</p></Col>
      </Row>
    </Container>
  )
}

export default BannerBienvenida
