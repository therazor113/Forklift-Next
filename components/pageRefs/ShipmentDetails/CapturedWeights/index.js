import { useContext } from "react"
import WeightCaptureContext from "../../../context/WeightCaptureContext"

import classes from './styles.module.scss'

const CapturedWeights = () => {
  const { weightCaptureData, setWeightCaptureData } = useContext(WeightCaptureContext)

  const handleAbort = () => {
    console.log(weightCaptureData)
  }
  return (
    <main className={classes.container}>
      <div className={classes.weightFunction}>
        <ul>
          {weightCaptureData.map((data, index) => (
            <li key={`capture-${index}`}>
              {data.hu} &nbsp;
              {data.weight}
              </li>
          ))}
        </ul>
        <div className={classes.buttons}>
          <div className={classes.select}>
            <button>&#129145;</button>
            <button>&#129147;</button>
          </div>
          <div className={classes.selectFunction}>
            <button onClick={handleAbort}>Abort All</button>
            <button>Delete Selected</button>
          </div>
        </div>
      </div>
      <h2>Total: 1 <span>NULL</span></h2>
    </main>
  )
}

export default CapturedWeights