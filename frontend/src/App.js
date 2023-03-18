import React, { createContext, useState } from 'react' //, useContext
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Ingreso from './pages/Ingreso'
import InicioUA from './pages/InicioUA'
import InicioUB from './pages/InicioUB'
import Mascotas from './pages/Mascotas'
import Adoptados from './pages/Adoptados'
import Voluntarios from './pages/Voluntarios'
import Mensajes from './pages/Mensajes'
import Calendario from './pages/Calendario'
import MascotasEnAdopcion from './pages/MascotasEnAdopcion'
import FormularioAdopcion from './pages/FormularioAdopcion'

export const AppContext = createContext({
  estado: false,
  cambiarEstado: () => { },
  mascota: {},
  dataMascota: () => { }
})

const App = () => {
  const [estado, setEstado] = useState(false)
  const [mascota, setDataMascota] = useState({})

  const cambiarEstado = (nuevoEstado) => {
    setEstado(nuevoEstado)
  }
  const dataMascota = (nuevoEstado) => {
    setDataMascota(nuevoEstado)
  }

  return (
    <AppContext.Provider value={{ estado, cambiarEstado, mascota, dataMascota }}>
      <Router>
        <Routes>
          <Route path='/' element={<Ingreso />} />
          <Route path='/administracion' element={<InicioUA />} />
          <Route path='/mascotas' element={<Mascotas />} />
          <Route path='/adoptados' element={<Adoptados />} />
          <Route path='/voluntarios' element={<Voluntarios />} />
          <Route path='/mensajes' element={<Mensajes />} />
          <Route path='/calendario' element={<Calendario />} />
          {/* RUTAS DEL CLIENTE */}
          <Route path='/inicio' element={<InicioUB />} />
          <Route path='/mascotas-en-adopcion' element={<MascotasEnAdopcion />} />
          <Route path='/formulario-adopcion' element={<FormularioAdopcion />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  )
}

export default App
