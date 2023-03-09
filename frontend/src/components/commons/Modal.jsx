import { useState } from 'react'

const Modal = ({ titulo, contenido, textoDelBoton }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => setIsOpen(false)

  return (
    <div id='modal'>
      <p onClick={() => setIsOpen(true)} style={{ cursor: 'pointer' }}>{textoDelBoton}</p>
      {isOpen &&
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={handleClose} style={{ cursor: 'pointer' }}>&times;</span>
            <h2>{titulo}</h2>
            <p>{contenido}</p>
          </div>
        </div>}
    </div>
  )
}

export default Modal
