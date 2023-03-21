import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SideNav from '../components/commons/Sidebar'

const Calendario = () => {
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
    </>
  )
}

export default Calendario
