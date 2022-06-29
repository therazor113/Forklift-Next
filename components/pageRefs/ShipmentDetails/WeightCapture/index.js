import { useState, useContext } from "react"
import { useRouter } from 'next/router'
import WeightContext from "../../../context/WeightContext"

import classes from './styles.module.scss'

const WeightCapture = () => {
  const [index, setIndex] = useState(1)
  const { weightData } = useContext(WeightContext)
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
    return (
      <button>Bruh</button>
    )
  }

  const handleCapture = () => {

  }

  const handleComplete = () => {
    router.push('/')
  }

  const handleDimension = () => {
    // not in use
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
        <button onClick={handleDimension}>Dimension</button>
      </div>
    </main>
  )
}

export default WeightCapture