import { Container } from 'react-grid-system'
import { Gallery } from 'react-grid-gallery'
import obtenerTamanoImagen from './photos'

const Adoptaditos = () => {
  return (
    <Container fluid id='mural-adoptados'>
      <Container className='mural-adoptados' style={{ textAlign: 'center', maxWidth: '1300px' }}>
        <h1 style={{ color: '#292929' }}>Mural Huellitas adoptadas</h1>
        <Gallery images={obtenerTamanoImagen()} enableImageSelection={false} rowHeight={300} />
      </Container>
    </Container>
  )
}

export default Adoptaditos
