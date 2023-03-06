import axios from 'axios'
import { useEffect, useState } from 'react'

const ListaMascotas = () => {
  const [mascotas, setMascotas] = useState([])
  const baseUrl = 'http://localhost:3001'

  useEffect(() => {
    axios.get(`${baseUrl}/api/mascotas`)
      .then((res) => setMascotas(res.data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      {
      mascotas.map((mascota) => {
        return (
          <div key={mascota._id}>
            <div>
              <p>{mascota.animal}</p>
              {mascota.name === undefined ? 'No se le asignó un nombre.' : <p>{mascota.name}</p>}
              <p>{mascota.name}</p>
            </div>
          </div>
        )
      })
    }
    </>
  )
}

export default ListaMascotas
