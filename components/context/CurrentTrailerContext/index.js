import { createContext, useState } from "react";

const CurrentTrailerContext = createContext()

export const CurrentTrailerProvider = ({ children }) => {
  const [trailerData, setTrailerData] = useState([])
  
  return (
    <CurrentTrailerContext.Provider value={{ trailerData, setTrailerData }}>
      {children}
    </CurrentTrailerContext.Provider>
  )
}

export default CurrentTrailerContext