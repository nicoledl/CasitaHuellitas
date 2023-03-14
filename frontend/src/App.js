import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contacto from './pages/Contacto'
import Ingreso from './pages/Ingreso'
import InicioUA from './pages/InicioUA'
import InicioUB from './pages/InicioUB'
import Mascotas from './pages/Mascotas'
import Adoptados from './pages/Adoptados'
import Voluntarios from './pages/Voluntarios'
import Mensajes from './pages/Mensajes'
import Calendario from './pages/Calendario'

export const GlobalContext = createContext(null)

const App = () => {
  const [valor, setValor] = useState(null)

  const handleChange = (valor) => {
    setValor(valor)
  }

  return (
    <GlobalContext.Provider value={{ valor, handleChange }}>
      <Router>
        <Routes>
          <Route path='/' element={<Ingreso />} />
          <Route path='/administracion' element={<InicioUA valor={{ valor, handleChange }} />} />
          <Route path='/mascotas' element={<Mascotas />} />
          <Route path='/adoptados' element={<Adoptados />} />
          <Route path='/voluntarios' element={<Voluntarios />} />
          <Route path='/mensajes' element={<Mensajes />} />
          <Route path='/calendario' element={<Calendario />} />
          <Route path='/inicio' element={<InicioUB />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
      </Router>
    </GlobalContext.Provider>
  )
}

export default App
