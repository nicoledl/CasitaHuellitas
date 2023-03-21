import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SideNav from '../components/commons/Sidebar'
import RegistroAdopciones from '../components/usuarioAvanzado/RegistroAdopciones'

const Adoptados = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = Cookies.get('token') // Obtener token de las cookies
    if (token === undefined) {
      return navigate('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
