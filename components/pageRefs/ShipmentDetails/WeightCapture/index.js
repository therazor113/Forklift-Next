import { useState, useContext } from "react"
import { useRouter } from 'next/router'
import WeightContext from "../../../context/WeightContext"
import WeightCaptureContext from "../../../context/WeightCaptureContext"
import Keys from '../../../utilities/KeyPad/Keys'

import classes from './styles.module.scss'

const WeightCapture = () => {
  const { setWeightCaptureData } = useContext(WeightCaptureContext)
  const { weightData, setWeightData } = useContext(WeightContext)
  const [index, setIndex] = useState(1)
  const [showKeypad, setShowKeypad] = useState(false)
  const router = useRouter()

  const handleCapture = () => {
    if (weightData !== 0) {
    setIndex(1)
    setWeightCaptureData(prevCapture => 
      [...prevCapture, {hu: index, weight: weightData}]
    )
    } else {
      alert('Cannot capture weight of 0')
    }
  }

  const handleComplete = () => {
    setWeightCaptureData([])
    // update pro data with new weights and hu's (maybe store the old data else where)
    router.push('/moveShipment')
  }

  const handleRandom = () => {
    setWeightData(Math.round(Math.random() * 500) * 5)
  }

  return (
    <main className={classes.container}>
      {showKeypad && <Keys classes={classes} />}
      <div className={classes.huDiv}>
        <h2>HU: <span>{index}</span></h2>
        <div className={classes.increment}>
          <button onClick={() => setIndex(i => i + 1 >= 99 ? 99 : i + 1)}>+</button>
          <button onClick={() => setIndex(i => i - 1 <= 1 ? 1 : i - 1)}>&minus;</button>
        </div>
        <button onClick={() => setShowKeypad(!showKeypad)}>&#x2328;</button>
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