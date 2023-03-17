import SideNav from '../components/commons/Sidebar'
import RegistroAdopciones from '../components/usuarioAvanzado/RegistroAdopciones'

const Adoptados = () => {
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
