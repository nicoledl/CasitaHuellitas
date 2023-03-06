import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Ingreso from './pages/Ingreso'
import Inicio from './pages/InicioUB'
import InicioUA from './pages/InicioUA'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Ingreso />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/inicio-usuario' element={<InicioUA />} />
      </Routes>
    </Router>
  )
}

export default App
