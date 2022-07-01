import { useState, useContext } from "react"
import { useRouter } from 'next/router'
import WeightContext from "../../../context/WeightContext"
import WeightCaptureContext from "../../../context/WeightCaptureContext"

import classes from './styles.module.scss'

const WeightCapture = () => {
  const [index, setIndex] = useState(1)
  const { setWeightCaptureData } = useContext(WeightCaptureContext)
  const { weightData, setWeightData } = useContext(WeightContext)
  const router = useRouter()

  const handleAdd = () => {
    if (index == 99) return
    setIndex(val => val + 1)
  }

  const handleSub = () => {
    if (index == 1) return
    setIndex(val => val - 1)
  }

  const handleHuKeypad = () => { // not used yet
    
  }

  const handleCapture = () => {
    if (weightData !== 0) {
    setIndex(1)
    setWeightCaptureData(prevCapture => 
      [...prevCapture, {hu: index, weight: weightData
      }])
    } else {
      alert('Cannot capture weight of 0')
    }
  }

  const handleComplete = () => {
    setWeightCaptureData([])
    // update pro api data with new weights and hu's (maybe store the old data else where)
    router.push('/moveShipment')
  }

  const handleRandom = () => {
    setWeightData(Math.round(Math.random() * 500) * 5)
  }

  return (
    <main className={classes.container}>
      <div className={classes.huDiv}>
        <h2>HU: <span>{index}</span></h2>
        <div className={classes.increment}>
          <button onClick={handleAdd}>+</button>
          <button onClick={handleSub}>&minus;</button>
        </div>
        <button onClick={handleHuKeypad}>&#x2328;</button>
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