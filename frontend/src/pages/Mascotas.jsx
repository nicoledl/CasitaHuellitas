import SideNav from '../components/commons/Sidebar'
import ListaMascotas from '../components/usuarioAvanzado/ListaMascotas'
import Cargando from '../components/commons/Cargando'
import { useSelector } from 'react-redux'

const Mascotas = () => {
  const user = useSelector((state) => state.user);

  if (!user.id) {
    return <Cargando />
  }
  return (
    <>
      <SideNav />
      <div style={{ paddingTop: 50, paddingLeft: '70px' }}>
        <ListaMascotas />
      </div>
    </>
  )
}

export default Mascotas
