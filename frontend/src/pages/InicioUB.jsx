import Navbar from '../components/commons/Navbar'
import Banner from '../components/usuarioBasico/Banner'
import imgBanner from '../assets/banner1.jpg'
import Adoptaditos from '../components/usuarioBasico/Adoptaditos'

const estiloInicio = {
  backgroundImage: `url('${imgBanner}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh'
}

const estiloAdoptaditos = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const Inicio = () => {
  return (
    <>
      <div style={estiloInicio}>
        <Navbar />
        <Banner />
      </div>
      <div style={estiloAdoptaditos}>
        <Adoptaditos />
      </div>
    </>
  )
}

export default Inicio
