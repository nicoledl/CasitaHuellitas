import axios from 'axios'
import Cookies from 'js-cookie'
import { FaDoorOpen } from 'react-icons/fa'

const estiloItem = { display: 'flex', alignItems: 'center', gap: '10px' }

const Logout = ({ collapsed }) => {
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
    <button className='boton-logout' onClick={handleLogout}>
      {collapsed ? <FaDoorOpen size={25} /> : <span style={estiloItem}><FaDoorOpen size={25} /><p style={{ fontSize: 'large' }}>Cerrar Sesión</p></span>}
    </button>
  )
}

export default Logout
