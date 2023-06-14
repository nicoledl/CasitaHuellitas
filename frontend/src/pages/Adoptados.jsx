import { useSelector } from 'react-redux';
import Cargando from '../components/commons/Cargando';
import SideNav from '../components/commons/Sidebar'
import RegistroAdopciones from '../components/usuarioAvanzado/RegistroAdopciones'

const Adoptados = () => {
  const user = useSelector((state) => state.user);

  if (!user.id) {
    return <Cargando />
  }
  return (
    <>
      <SideNav />
      <div style={{ marginLeft: '70px' }}>
        <RegistroAdopciones />
      </div>
    </>
  )
}

export default Adoptados
