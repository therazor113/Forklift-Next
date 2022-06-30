import { useContext, useEffect, useState } from "react"
import WeightCaptureContext from "../../../context/WeightCaptureContext"

import classes from './styles.module.scss'

const CapturedWeights = () => {
  const { weightCaptureData, setWeightCaptureData } = useContext(WeightCaptureContext)
  const [weightTotal, setWeightTotal] = useState(0)
  const [huTotal, setHuTotal] = useState(0)

  useEffect(() => {
    if (weightCaptureData.length == 0) {
      setHuTotal(0)
      setWeightTotal(0)
    } else {
      setHuTotal(weightCaptureData.map(i=>i.hu).reduce((x,y)=>x+y))
      setWeightTotal(weightCaptureData.map(i=>i.weight).reduce((x,y)=>x+y))
    }
    
  }, [weightCaptureData])

  
  const handleAbort = () => {
    setWeightCaptureData([])
  }

  const handleDelete = () => {
    
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
            <button onClick={handleDelete}>Delete Selected</button>
          </div>
        </div>
      </div>
      <h2>Total: {huTotal} <span>{weightTotal}</span></h2>
    </main>
  )
}

export default CapturedWeights