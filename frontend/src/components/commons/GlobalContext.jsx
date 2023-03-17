import { createContext, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [value, setValue] = useState('default value')

  const handleChange = (newValue) => {
    setValue(newValue)
  }

  return (
    <GlobalContext.Provider value={{ value, handleChange }}>
      {children}
    </GlobalContext.Provider>
  )
}
