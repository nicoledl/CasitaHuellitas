import { Container } from 'react-grid-system'
import PhotoAlbum from 'react-photo-album'
import { obtenerTamanoImagen } from './photos'

const Adoptaditos = () => {
  return (
    <Container fluid id='mural-adoptados'>
      <Container className='mural-adoptados' style={{ textAlign: 'center', maxWidth: '1300px' }}>
        <h1 style={{ color: '#292929' }}>Mural Huellitas adoptadas</h1>
        <PhotoAlbum
          layout='rows'
          photos={obtenerTamanoImagen()}
          spacing={5}
          rows={(containerWidth) => {
            if (containerWidth < 400) return 3
            if (containerWidth < 800) return 4
            return 5
          }}
        />
      </Container>
    </Container>
  )
}

export default Adoptaditos
