import axios from 'axios'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const baseUrl = 'http://localhost:3001'

  const onSubmit = async datos => {
    try {
      const response = await axios.post(`${baseUrl}/api/login`, datos)
      console.log(`Bienvenido ${datos.email}`)
      Cookies.set('token', response.data.token)
    } catch (error) {
      console.error('Error al enviar los datos:', error)
    }
  }

  return (
    <form id='formulario-login' onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='Mail' {...register('email', { required: true })} />
      <input type='text' placeholder='Contraseña' {...register('password', { required: true })} />
      <button>Ingresar</button>
    </form>
  )
}

export default Login
