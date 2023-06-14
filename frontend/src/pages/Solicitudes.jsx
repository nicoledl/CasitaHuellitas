import Cargando from '../components/commons/Cargando';
import SideNav from '../components/commons/Sidebar'
import RegistroSolicitudes from '../components/usuarioAvanzado/RegistroSolicitudes'
import { useSelector } from 'react-redux'

const Solicitudes = () => {
  const user = useSelector((state) => state.user);

  if (!user.id) {
    return <Cargando />
  }
  return (
    <>
      <SideNav />
      <RegistroSolicitudes />
    </>
  )
}

export default Solicitudes
