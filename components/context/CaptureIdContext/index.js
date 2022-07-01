import { createContext, useState } from 'react'

const CaptureIdContext = createContext()

export const CaptureIdProvider = ({ children }) => {
  const [captureId, setCaptureId] = useState(0)
  return (
    <CaptureIdContext.Provider value={{ captureId, setCaptureId }}>
      {children}
    </CaptureIdContext.Provider>
  )
}

export default CaptureIdContext