import ListaMascotas from '../components/usuarioAvanzado/ListaMascotas'
import FormularioDeMascota from '../components/usuarioAvanzado/FormularioDeMascota'
import Navbar from '../components/commons/Navbar'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { GlobalContext } from '../App'
import Cargando from '../components/commons/Cargando'
import { useNavigate } from 'react-router-dom'
// import Logout from '../components/sesion/Logout'

const InicioUA = () => {
  const navigate = useNavigate()
  const { handleChange } = useContext(GlobalContext)
  const [id, setId] = useState(null)
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    const obtenerIdUsuario = () => {
      try {
        const token = Cookies.get('token') // Obtener token de las cookies
        if (token === undefined) {
          return navigate('/')
        }
        axios.get('http://localhost:3001/api/usuarios/me', {
          headers: {
            Authorization: `Bearer ${token}` // Pasar el token en el header
          }
        }).then((res) => {
          setId(res.data)
          handleChange(res.data)
        })
      } catch (error) {
        console.log(error)
      }
    }
    obtenerIdUsuario()
    // eslint-disable-next-line
  }, [id])

  useEffect(() => {
    if (id !== null) {
      const obtenerInfoUsuario = () => {
        try {
          axios.get(`http://localhost:3001/api/usuarios/${id}`)
            .then((res) => {
              setUsuario(res.data)
            })
        } catch (error) {
          console.log(error)
        }
      }
      obtenerInfoUsuario()
    }
    // eslint-disable-next-line
  }, [id])

  if (usuario === null) {
    return <Cargando />
  }

  return (
    <>
      <Navbar />
      <ListaMascotas />
      <FormularioDeMascota />
      {/* <Logout /> */}
    </>
  )
}

export default InicioUA
