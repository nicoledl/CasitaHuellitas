import { Container } from 'react-grid-system'
import './estiloMensajeCargando.css'

const Cargando = () => {
  console.log('CSS Loading Animation created by Ahmad Emran')

  return (
    <Container fluid id='mensaje-de-carga'>
      <div className='wrapper'>
        <div className='circle' />
        <div className='circle' />
        <div className='circle' />
        <div className='shadow' />
        <div className='shadow' />
        <div className='shadow' />
        <span>Cargando</span>
      </div>
    </Container>
  )
}

export default Cargando
