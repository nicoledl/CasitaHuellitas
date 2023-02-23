import BotonParaAdoptantes from '../components/sesion/BotonParaAdoptantes'
import Login from '../components/sesion/FormularioLogin'

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

const Inicio = () => {
  return (
    <div id='pag-de-inicio'>
      <div style={styleDiv}>
        <h1><span style={{ transform: 'scaleX(-1)', display: 'inline-block' }}>🐈</span> Encontrá tu huellita 🐕</h1>
        <BotonParaAdoptantes />
        <div style={styleDivisor}>
          <span id='divisor-l' /><p>O</p> <span id='divisor-r' />
        </div>
        <h3>Si sos administrador...</h3>
        <Login />
      </div>
    </div>
  )
}

export default Inicio
