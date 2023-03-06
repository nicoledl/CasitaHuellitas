import { useNavigate } from 'react-router-dom'

const container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px'
}

const BotonParaAdoptantes = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/inicio')
  }

  return (
    <div style={container}>
      <button id='boton-conocer' onClick={handleClick}>¡Conocelos!</button>
    </div>
  )
}

export default BotonParaAdoptantes
