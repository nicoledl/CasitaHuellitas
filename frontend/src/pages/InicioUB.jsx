import Navbar from '../components/commons/Navbar'
import Banner from '../components/usuarioBasico/Banner'
import Adoptaditos from '../components/usuarioBasico/Adoptaditos'
import Mision from '../components/usuarioBasico/Mision'
import { AppContext } from '../App'
import { useContext, useEffect } from 'react'

const Inicio = () => {
  const { dataMascota } = useContext(AppContext)

  useEffect(() => {
    dataMascota({})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
