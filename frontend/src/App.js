/* eslint-disable react/jsx-closing-tag-location */
import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Ingreso from './pages/Ingreso'
import InicioUA from './pages/InicioUA'
import InicioUB from './pages/InicioUB'
import Mascotas from './pages/Mascotas'
import Adoptados from './pages/Adoptados'
import ContactosVoluntarios from './pages/ContactosVoluntarios'
import Calendario from './pages/Calendario'
import MascotasEnAdopcion from './pages/MascotasEnAdopcion'
import FormularioAdopcion from './pages/FormularioAdopcion'
import Solicitudes from './pages/Solicitudes'
import InfoPreAdopcion from './pages/InfoPreAdopcion'
import Donaciones from './pages/Donaciones'

export const AppContext = createContext({
  estado: false,
  cambiarEstado: () => { },
  token: undefined,
  obtenerToken: () => { },
  mascota: {},
  dataMascota: () => { }
})

const App = () => {
  const [estado, setEstado] = useState(false)
  const [token, setToken] = useState(false)
  const [mascota, setDataMascota] = useState({})

  const cambiarEstado = (nuevoEstado) => {
    setEstado(nuevoEstado)
  }
  const dataMascota = (nuevoEstado) => {
    setDataMascota(nuevoEstado)
  }
  const obtenerToken = (nuevoEstado) => {
    setToken(nuevoEstado)
  }

  return (
    <AppContext.Provider value={{ estado, cambiarEstado, token, obtenerToken, mascota, dataMascota }}>
      <Router>
        <Routes>
          {/* RUTAS DEL SERVIDOR */}
          <Route path='/ingreso' element={<Ingreso />} />
          <Route path='/administracion' element={<InicioUA />} />
          <Route path='/mascotas' element={<Mascotas />} />
          <Route path='/adoptados' element={<Adoptados />} />
          <Route path='/contactosvoluntarios' element={<ContactosVoluntarios />} />
          <Route path='/solicitudes' element={<Solicitudes />} />
          <Route path='/calendario' element={<Calendario />} />
          {/* RUTAS DEL CLIENTE */}
          <Route path='/' element={<InicioUB />} />
          <Route path='/adoptar' element={<MascotasEnAdopcion />} />
          <Route path='/donaciones' element={<Donaciones />} />
          <Route path='/info-pre-adopcion' element={<InfoPreAdopcion />} />
          <Route path='/formulario-adopcion' element={<FormularioAdopcion />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  )
}

export default App
