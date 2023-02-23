import { useForm } from 'react-hook-form'
import axios from 'axios'

const Formulario = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = async datos => {
    try {
      await axios.post('http://localhost:3001/api/mascotas', datos, { withCredentials: true })
      console.log('Datos enviados exitosamente')
    } catch (error) {
      console.error('Error al enviar los datos:', error)
    }
  }
  const date = new Date().toLocaleString()

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register('animal')}>
          <option value='Perro'>Perro</option>
          <option value='Gato'>Gato</option>
          <option value='Ave'>Ave</option>
          <option value='Ruedor'>Ruedor</option>
        </select>
        <input type='text' placeholder='Nombre' {...register('name', { required: false, maxLength: 100 })} />
        <input type='text' placeholder='Nota' {...register('note', { required: false, maxLength: 100 })} />
        <label>
          Importante:
          <input type='checkbox' placeholder='Importante' defaultChecked={false} {...register('important', {})} />
        </label>
        <input type='hidden' value={date} {...register('date', {})} />
        <button>AGREGAR</button>
      </form>
      <button onClick={() => window.location.reload()}>Actualizar</button>
    </>
  )
}

export default Formulario
