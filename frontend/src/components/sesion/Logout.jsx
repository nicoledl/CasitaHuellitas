// import axios from 'axios'
// import Cookies from 'js-cookie'
// import { useNavigate } from 'react-router-dom'

// const Logout = () => {
//   const navigate = useNavigate()
//   const baseUrl = 'http://localhost:3001/api'

//   const onClick = async () => {
//     try {
//       const token = Cookies.get('token') // Obtener token de las cookies
//       await axios.post(`${baseUrl}/logout`, null, {
//         headers: {
//           Authorization: `Bearer ${token}` // Pasar el token en el header
//         },
//         withCredentials: true,
//         credentials: 'include'
//       })
//       Cookies.remove('token')
//       navigate('/')
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <button onClick={onClick}>
//       Cerrar Sesion
//     </button>
//   )
// }

// export default Logout
