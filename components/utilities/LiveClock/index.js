import { useState, useEffect } from "react"

const LiveClock = ( CurrentDate, ClockString ) => {
  const [index, setIndex] = useState('-')
  CurrentDate = new Date()
  ClockString = CurrentDate.toDateString() + " " + CurrentDate.toLocaleTimeString()
  
  useEffect(() => {
    const interval = setInterval(() => {setIndex(ClockString)}, 1000)
      return () => clearInterval(interval)
  })
  
  return (
    <h2>
      {index}
    </h2>
  ) 
}

export default LiveClock