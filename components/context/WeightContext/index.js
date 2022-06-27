import { createContext, useState } from "react"

const WeightContext = createContext()

export function WeightProvider({ children }) {
  const [weightData, setWeightData] = useState(3000)

  return (
    <WeightContext.Provider value={{ weightData, setWeightData }}>
      {children}
    </WeightContext.Provider>
  )
}

export default WeightContext