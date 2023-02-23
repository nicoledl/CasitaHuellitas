
const container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px'
}
const boton = {
  color: '#f5f5f5',
  backgroundColor: '#1C6EA4',
  width: '50%',
  border: 'none',
  borderRadius: '6px 6px 6px 6px',
  paddingTop: '8px',
  paddingBottom: '8px',
  fontSize: 'large'
}

const BotonParaAdoptantes = () => {
  return (
    <div style={container}>
      <button style={boton}>¡Conocelos!</button>
    </div>
  )
}

export default BotonParaAdoptantes
