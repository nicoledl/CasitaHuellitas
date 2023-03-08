import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Ingreso from './pages/Ingreso'
import InicioUA from './pages/InicioUA'
import InicioUB from './pages/InicioUB'

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
          <Route path='/inicio' element={<InicioUB />} />
        </Routes>
      </Router>
    </GlobalContext.Provider>
  )
}

export default App
