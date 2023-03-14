import Sidebar from '../components/commons/Sidebar'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { GlobalContext } from '../App'
import Cargando from '../components/commons/Cargando'
import { useNavigate } from 'react-router-dom'

const InicioUA = () => {
  const navigate = useNavigate()
  const { handleChange } = useContext(GlobalContext)
  const [id, setId] = useState(null)
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    if (id !== null) {
      return
    }
    const obtenerIdUsuario = () => {
      try {
        const token = Cookies.get('token') // Obtener token de las cookies
        if (token === undefined) {
          return navigate('/')
        }
        axios.get('http://localhost:3001/api/usuarios/me', {
          withCredentials: true
        })
          .then((res) => {
            setId(res.data._id)
            handleChange(res.data._id)
          }).catch((err) => {
            console.log(err)
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
          axios.get(`http://localhost:3001/api/usuarios/${id}`, {
            withCredentials: true
          })
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
      <Sidebar />
    </>
  )
}

export default InicioUA
