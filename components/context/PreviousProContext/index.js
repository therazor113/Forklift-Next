import { createContext, useState } from "react";

const PreviousProContext = createContext()

export const PreviousProProvider = ({ children }) => {
  const [previousProData, setPreviousProData] = useState([])

  return (
    <PreviousProContext.Provider value={{ previousProData, setPreviousProData }}>
      {children}
    </PreviousProContext.Provider>
  )
}

export default PreviousProContext