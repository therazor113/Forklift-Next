import { useContext, useEffect, useState } from "react"
import WeightCaptureContext from "../../../context/WeightCaptureContext"

import classes from './styles.module.scss'

const CapturedWeights = ({}) => {
  const { weightCaptureData, setWeightCaptureData } = useContext(WeightCaptureContext)
  const [weightTotal, setWeightTotal] = useState(0)
  const [huTotal, setHuTotal] = useState(0)
  const [select, setSelect] = useState(1)


  useEffect(() => {
    if (weightCaptureData.length == 0) {
      setHuTotal(0)
      setWeightTotal(0)
    } else {
      setHuTotal(weightCaptureData.map(i=>i.hu).reduce((x,y)=>x+y))
      setWeightTotal(weightCaptureData.map(i=>i.weight).reduce((x,y)=>x+y))
    }
  }, [weightCaptureData])

  useEffect(() => {
    weightCaptureData.forEach((item, i) => {item.id = i + 1})
  }, [weightCaptureData])

  const handleUp = () => {
    if (weightCaptureData.length == 0) return
    setSelect(val => val - 1 <= weightCaptureData[0].id ? weightCaptureData[0].id : val - 1)
  }

  const handleDown = () => {
    if (weightCaptureData.length == 0) return
    setSelect(val => 
      val + 1 >= weightCaptureData[weightCaptureData.length - 1].id 
      ? weightCaptureData[weightCaptureData.length - 1].id : val + 1
      )
  }
  
  const handleAbort = () => {
    setWeightCaptureData([])
    setSelect(1)
  }

  const handleDelete = () => {
    if (weightCaptureData.length == 0) return

    if (weightCaptureData[weightCaptureData.length - 1].id == select && weightCaptureData.length !== 1) {
      setSelect(val => val - 1)
    }
    setWeightCaptureData(weightCaptureData.filter((list) => list.id !== select))
  }

  return (
    <main className={classes.container}>
      <div className={classes.weightFunction}>
        <ul>
          {weightCaptureData.map((data, index) => (
            <li 
            className={data.id == select ? classes.selected : ''}
            key={`capture-${index}`}
            >
              {data.hu} &nbsp;
              {data.weight}
              </li>
          ))}
        </ul>
        <div className={classes.buttons}>
          <div className={classes.select}>
            <button onClick={handleUp}>&#129145;</button>
            <button onClick={handleDown}>&#129147;</button>
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