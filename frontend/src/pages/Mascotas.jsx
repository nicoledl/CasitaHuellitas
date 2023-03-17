import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideNav from '../components/commons/Sidebar'
import ListaMascotas from '../components/usuarioAvanzado/ListaMascotas'
import Cargando from '../components/commons/Cargando'

const Mascotas = () => {
  const [cargando, setCargando] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    try {
      const token = Cookies.get('token') // Obtener token de las cookies
      if (token === undefined) {
        return navigate('/')
      }
      setCargando(false)
    } catch (error) {
      console.log(error)
    }
    // eslint-disable-next-line
  }, [cargando])

  if (cargando) {
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
