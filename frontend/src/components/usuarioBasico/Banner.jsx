import { Container } from 'react-grid-system'

const Banner = () => {
  return (
    <Container fluid id='container-banner'>
      <div className='contenido-banner'>
        <h1>Conocé nuestras huellitas en busca de una casita...</h1>
        <p>...y dejá que marquen tú corazón.</p>
      </div>
    </Container>
  )
}

export default Banner
