import { createContext, useState } from 'react'

const WeightCaptureContext = createContext()

export const WeightCaptureProvider = ({ children }) => {
  const [weightCaptureData, setWeightCaptureData] = useState([])

  return (
    <WeightCaptureContext.Provider value={{ weightCaptureData, setWeightCaptureData }}>
      {children}
    </WeightCaptureContext.Provider>
  )
}

export default WeightCaptureContext