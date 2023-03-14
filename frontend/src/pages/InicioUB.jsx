import Navbar from '../components/commons/Navbar'
import Banner from '../components/usuarioBasico/Banner'
import Adoptaditos from '../components/usuarioBasico/Adoptaditos'
import Mision from '../components/usuarioBasico/Mision'

const Inicio = () => {
  return (
    <>
      <div id='container-header-ub'>
        <Navbar />
        <Banner />
      </div>
      <Mision />
      <div id='tabla-adoptaditos'>
        <Adoptaditos />
      </div>
    </>
  )
}

export default Inicio
