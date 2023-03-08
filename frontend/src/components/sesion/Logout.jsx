import axios from 'axios'
import Cookies from 'js-cookie'

const Logout = () => {
  const baseUrl = 'http://localhost:3001'

  const handleLogout = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const logout = await axios.post(`${baseUrl}/api/usuarios/logout`)
      Cookies.remove('token')
      // eslint-disable-next-line no-unused-vars
      const reload = await window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button onClick={handleLogout}>
      Cerrar Sesion
    </button>
  )
}

export default Logout
