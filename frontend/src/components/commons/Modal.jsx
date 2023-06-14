import { useState } from 'react'

const Modal = ({ contenido, textoDelBoton, estiloDelBoton }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => {
    dataMascota({})
    setIsOpen(false)
  }
  const handleOpen = () => setIsOpen(true)

  const boton = (texto, estilo) => <button style={estilo}>{texto}</button>

  return (
    <div id='modal'>
      <span onClick={handleOpen} style={{ cursor: 'pointer' }}>{boton(textoDelBoton, estiloDelBoton)}</span>
      {isOpen &&
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={handleClose} style={{ cursor: 'pointer', zIndex: '20', color: '#000', position: 'absolute' }}>&times;</span>
            {contenido}
          </div>
        </div>}
    </div>
  )
}

export default Modal
