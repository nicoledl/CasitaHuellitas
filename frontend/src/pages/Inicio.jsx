import Navbar from '../components/commons/Navbar'
import Banner from '../components/usuarioBasico/Banner'
import imgBanner from '../assets/banner1.jpg'
import Adoptaditos from '../components/usuarioBasico/Adoptaditos'

const styleInicio = {
  backgroundImage: `url('${imgBanner}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh'
}

const Inicio = () => {
  return (
    <>
      <div style={styleInicio}>
        <Navbar />
        <Banner />
      </div>
      <Adoptaditos />
    </>
  )
}

export default Inicio
