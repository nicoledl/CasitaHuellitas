import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useEffect, useState } from 'react'

const ListaMascotas = () => {
  const [mascotas, setMascotas] = useState([])
  const [editar, setEditar] = useState(false)
  const [id, setId] = useState('')
  const { register, handleSubmit } = useForm()
  const baseUrl = 'http://localhost:3001'

  useEffect(() => {
    axios.get(`${baseUrl}/api/mascotas`)
      .then((res) => setMascotas(res.data))
      .catch((error) => console.error(error))
  }, [])

  const onEdit = (mascotaId) => {
    setId(mascotaId)
    setEditar(true)
  }

  const onSubmit = async datos => {
    try {
      await axios.put(`${baseUrl}/api/mascotas/${id}`, datos)
      console.log('Datos modificados exitosamente', datos)
      setEditar(!editar)
    } catch (error) {
      console.error('Error al modificar los datos:', error)
    }
  }

  const borrarMascota = (id) => {
    axios.delete(`${baseUrl}/api/mascotas/${id}`)
      .then((res) => console.log('Mascota eliminada'))
      .catch((error) => console.error(error))
  }

  return (
    <>
      {mascotas.length === 0
        ? <p>Cargando mascotas...</p>
        : mascotas.map((mascota) => {
          return (
            <div key={mascota._id}>
              {editar && id === mascota._id
                ? (
                  <>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <select defaultValue={mascota.animal} {...register('animal')}>
                        <option value='Perro'>Perro</option>
                        <option value='Gato'>Gato</option>
                        <option value='Ave'>Ave</option>
                        <option value='Ruedor'>Ruedor</option>
                      </select>
                      <input type='text' placeholder='Nombre' defaultValue={mascota.name} {...register('name', { required: false, maxLength: 100 })} />
                      <input
                        type='text'
                        placeholder='Nota'
                        defaultValue={mascota.note}
                        {...register('note', { maxLength: 100 })}
                      />
                      <label>
                        Importante:
                        <input
                          type='checkbox'
                          placeholder='Importante'
                          defaultChecked={mascota.important ? 'true' : false}
                          {...register('important', {})}
                        />
                      </label>
                      <button>Modificar</button>
                    </form>
                    <button onClick={() => setEditar(!editar)}>Cancelar</button>
                  </>
                  )
                : (
                  <div>
                    <p>{mascota.animal}</p>
                    {mascota.name === undefined ? 'No se le asignó un nombre.' : <p>{mascota.name}</p>}
                    <p>{mascota.note}</p>
                    {mascota.important
                      ? (
                        <p>Situacion de importancia.</p>
                        )
                      : (
                          false
                        )}
                    <p>{mascota.date}</p>
                    <button onClick={() => borrarMascota(mascota._id)}>
                      Eliminar
                    </button>
                    <button onClick={() => onEdit(mascota._id)}>Editar</button>
                  </div>
                  )}
            </div>
          )
        })}
    </>
  )
}

export default ListaMascotas
