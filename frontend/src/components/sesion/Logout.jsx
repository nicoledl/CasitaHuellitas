import axios from 'axios'
import Cookies from 'js-cookie'
import { FaDoorOpen } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const estiloItem = { display: 'flex', alignItems: 'center', gap: '10px' }

const Logout = ({ collapsed }) => {
  const navigate = useNavigate()
  const baseUrl = 'http://localhost:3001'

  const handleLogout = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const logout = await axios.post(`${baseUrl}/api/usuarios/logout`)
      Cookies.remove('token')
      return navigate('/')
      // eslint-disable-next-line no-unused-vars
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
