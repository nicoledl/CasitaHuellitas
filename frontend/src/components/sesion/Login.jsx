import axios from 'axios'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const baseUrl = 'http://localhost:3001'
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const onSubmit = async datos => {
    try {
      const response = await axios.post(`${baseUrl}/api/login`, datos)
      Cookies.set('token', response.data.token)
      navigate('/administracion')
    } catch (error) {
      if (error.response.data.message === 'Contraseña incorrecta' || error.response.data.message === 'Usuario no encontrado') {
        setErrorMessage('El correo o la contraseña son incorrectos')
      } else {
        setErrorMessage('Ocurrió un error al procesar la solicitud')
      }
    }
  }

  return (
    <>
      <form id='formulario-login' onSubmit={handleSubmit(onSubmit)}>
        {errorMessage && <span className='error-message'>{errorMessage}</span>}
        <input type='text' placeholder='Mail' {...register('email', { required: true })} />
        <input type='text' placeholder='Contraseña' {...register('password', { required: true })} />
        <button>Ingresar</button>
      </form>
    </>
  )
}

export default Login
