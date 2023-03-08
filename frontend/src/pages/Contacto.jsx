import React, { useContext } from 'react'
import { GlobalContext } from '../App'

function Contacto (props) {
  const { valor } = useContext(GlobalContext)

  return (
    <div>{valor} </div>
  )
}

export default Contacto
