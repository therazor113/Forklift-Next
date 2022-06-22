import { useState, useEffect } from "react"

const LiveClock = () => {
  
  const [index, setIndex] = useState('-')
  const CurrentDate = new Date()
  const ClockString = CurrentDate.toDateString() + " " + CurrentDate.toLocaleTimeString()
  
  useEffect(() => {
    const interval = setInterval(() => {setIndex(ClockString)}, 1000)
    return () => clearInterval(interval)
  }, [ClockString])
  
  return (
    <h2>
      {index}
    </h2>
  ) 
}

export default LiveClock