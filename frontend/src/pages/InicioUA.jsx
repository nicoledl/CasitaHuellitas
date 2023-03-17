import Sidebar from '../components/commons/Sidebar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import Cargando from '../components/commons/Cargando'
import { useNavigate } from 'react-router-dom'
import BannerBienvenida from '../components/usuarioAvanzado/BannerBienvenida'

const InicioUA = () => {
  const navigate = useNavigate()
  const [id, setId] = useState(null)
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    async function obtenerIdUsuario () {
      try {
        const token = Cookies.get('token') // Obtener token de las cookies
        if (token === undefined) {
          return navigate('/')
        }
        const response = await axios.get('http://localhost:3001/api/usuarios/me', {
          withCredentials: true
        })
        setId(response.data._id)

        const responseUser = await axios.get(`http://localhost:3001/api/usuarios/${id}`, {
          withCredentials: true
        })
        setUsuario(responseUser.data)
      } catch (error) {
        console.error('Error al cargar registro', error)
      }
    }

    obtenerIdUsuario()
    // eslint-disable-next-line
  }, [id])

  if (usuario === null) {
    return <Cargando />
  }

  return (
    <>
      <Sidebar />
      <div style={{ paddingTop: 50, paddingLeft: '70px' }}>
        <BannerBienvenida usuario={usuario} />
      </div>
    </>
  )
}

export default InicioUA
