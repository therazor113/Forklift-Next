import { useState, createContext } from 'react'

const CurrentProContext = createContext()

export const CurrentProProvider = ({ children }) => {
  const [currentPro, setCurrentPro] = useState([])

  return (
    <CurrentProContext.Provider value={{currentPro, setCurrentPro}}>
      {children}
    </CurrentProContext.Provider>
  )
}

export default CurrentProContext