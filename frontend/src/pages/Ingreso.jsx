import BotonParaAdoptantes from '../components/sesion/BotonParaAdoptantes'
import Login from '../components/sesion/Login'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../App'
import Cargando from '../components/commons/Cargando'

const styleDiv = {
  marginLeft: '5%',
  marginRight: '5%',
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'fit-content'
}
const styleDivisor = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'fit-content'
}

const Ingreso = () => {
  const navigate = useNavigate()
  const { valor } = useContext(GlobalContext)

  useEffect(() => {
    if (valor !== null) {
      navigate('/administracion')
    }
    // eslint-disable-next-line
  }, [valor])

  if (valor !== null) {
    return <Cargando />
  }

  return (
    <div id='pag-de-inicio'>
      <span id='borde-top' />
      <div style={styleDiv}>
        <h1><span style={{ transform: 'scaleX(-1)', display: 'inline-block' }}>🐈</span> Conocé nuestras huellitas 🐕</h1>
        <BotonParaAdoptantes />
        <div style={styleDivisor}>
          <span id='divisor-l' /><p>O</p> <span id='divisor-r' />
        </div>
        <h3>Si sos administrador...</h3>
        <Login />
      </div>
      <span id='borde-bot' />
    </div>
  )
}

export default Ingreso
