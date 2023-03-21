import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SideNav from '../components/commons/Sidebar'
import ContactosVoluntarios from '../components/usuarioAvanzado/ContactosVoluntarios'

const Voluntarios = () => {
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
      <ContactosVoluntarios />
    </>
  )
}

export default Voluntarios
