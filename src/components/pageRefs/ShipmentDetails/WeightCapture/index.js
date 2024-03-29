import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import WeightContext from 'contexts/WeightContext'
import WeightCaptureContext from 'contexts/WeightCaptureContext'
import CurrentProContext from 'contexts/CurrentProContext'
import { Complete } from './Complete'
import { SetTotal } from './setTotal'
// import useEditInput

import classes from './styles.module.scss'

const WeightCapture = () => {
  const { weightCaptureData, setWeightCaptureData } = useContext(WeightCaptureContext)
  const { weightData, setWeightData } = useContext(WeightContext)
  const { currentPro, setCurrentPro } = useContext(CurrentProContext)
  // const { inputValue, handleChange } = useEditInput({ hu: 0 })
  const [{ hu, weight }, setTotal] = useState({ hu: 0, weight: 0 })
  const [showInput, setShowInput] = useState(false)
  const [index, setIndex] = useState(1)
  const router = useRouter()

  // Set Total hu/weight
  useEffect(() => {
    SetTotal(weightCaptureData, setTotal)
  }, [weightCaptureData])

  // Capture Button
  const handleCapture = () => {
    if (weightData !== 0) {
      // Reset hu #
      setIndex(1)
      // Add weight and hu values to weightCaptureData
      setWeightCaptureData(prevCapture =>
        [...prevCapture, { hu: index, weight: weightData }]
      )
    } else {
    // Send alert if weight is 0
      alert('Cannot capture weight of 0')
    }
  }

  // Complete - Send to moveShipment
  const handleComplete = async () => {
    if (!hu || !weight) {
      alert('A weight must be captured!')
    } else {
      await Complete(currentPro, setCurrentPro, hu, weight)
      router.push('/moveShipment')
    }
  }

  // For weight change example
  // Random - sets weight value to a random number between 0-500*5
  const handleRandom = () => {
    setWeightData(Math.round(Math.random() * 500) * 5)
  }

  return (
    <main className={classes.container}>
      <div className={classes.huDiv}>
        <h2>HU: <span>{index}</span></h2>
        <div className={classes.increment}>
          <button onClick={() => setIndex(i => i + 1 >= 99 ? 99 : i + 1)}>+</button>
          <button onClick={() => setIndex(i => i - 1 <= 1 ? 1 : i - 1)}>&minus;</button>
        </div>
        <button onClick={() => setShowInput(!showInput)}>&#x2328;</button>
      </div>
      <div className={classes.captureButtons}>
        <span>{weightData}</span>
        <button onClick={handleCapture}>Capture</button>
        <button onClick={handleComplete}>Complete</button>
        <button onClick={handleRandom}>Random Weight</button>
      </div>
    </main>
  )
}

export default WeightCapture
