import { useState } from 'react'

const Modal = ({ titulo, contenido, textoDelBoton, estiloDelBoton }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => setIsOpen(false)

  const boton = (texto, estilo) => {
    return (
      <>
        <button style={estilo}>{texto}</button>
      </>
    )
  }

  return (
    <div id='modal'>
      <span onClick={() => { setIsOpen(true) }} style={{ cursor: 'pointer' }}>{boton(textoDelBoton, estiloDelBoton)}</span>
      {isOpen &&
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={handleClose} style={{ cursor: 'pointer' }}>&times;</span>
            <h1>{titulo}</h1>
            <div>{contenido}</div>
          </div>
        </div>}
    </div>
  )
}

export default Modal
