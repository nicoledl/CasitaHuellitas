import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SideNav from '../components/commons/Sidebar'
import RegistroSolicitudes from '../components/usuarioAvanzado/RegistroSolicitudes'

const Solicitudes = () => {
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
      <RegistroSolicitudes />
    </>
  )
}

export default Solicitudes
