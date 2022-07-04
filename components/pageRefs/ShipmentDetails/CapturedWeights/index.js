import { useContext, useEffect, useState, useRef } from "react"
import WeightCaptureContext from "../../../context/WeightCaptureContext"

import classes from './styles.module.scss'

const CapturedWeights = ({}) => {
  const { weightCaptureData, setWeightCaptureData } = useContext(WeightCaptureContext)
  const [weightTotal, setWeightTotal] = useState(0)
  const [huTotal, setHuTotal] = useState(0)
  const [select, setSelect] = useState(1)
  const [listTop, setListTop] = useState('')
  const [listBottom, setListBottom] = useState('')
  const scrollRef = useRef()
  const objRef = useRef()

  useEffect(() => {
    if (weightCaptureData.length == 0) {
      setHuTotal(0)
      setWeightTotal(0)
    } else {
      setHuTotal(weightCaptureData.map(i=>i.hu).reduce((x,y)=>x+y))
      setWeightTotal(weightCaptureData.map(i=>i.weight).reduce((x,y)=>x+y))
    }
    weightCaptureData.forEach((item, i) => {item.id = i + 1})
    if (weightCaptureData.length >= 10) {
      setListBottom('* * * *')
    }
  }, [weightCaptureData])

  useEffect(() => {
    if (select !== 1) {
      objRef.current.scrollIntoView({block: 'nearest', inline: 'start'})
    } else if (select == 1) {
      scrollRef.current.scrollTop = 0
    } else {
      
    }
  }, [select])

  useEffect(() => {
    if (weightCaptureData.length == 0) return
    if (select >= 11) {
      setListTop('* * * *')
    } else if (select == 1) {
      setListTop('')
    }

    if (weightCaptureData.length <= 10) {
      setListTop('')
      setListBottom('')
    }
  }, [select, weightCaptureData])

  useEffect(() => {
    if (weightCaptureData.length >= 11) {
      if (select == weightCaptureData[weightCaptureData.length - 1].id) {
        setListBottom('')
      } else if (select == weightCaptureData[weightCaptureData.length - 11].id) {
        setListBottom('* * * *')
      }
    }
  }, [select, weightCaptureData])

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
    setListBottom('')
    setListTop('')
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
        <div>
        <h2>{listTop}</h2>
        <ul ref={scrollRef}>
          {weightCaptureData.map((data, index) => (
            <li
            className={data.id == select ? classes.selected : ''}
            ref={data.id == select ? objRef : null}
            key={`capture-${index}`}
            >
              <span>
              {data.hu} &nbsp;
              {data.weight}
              </span>
              </li>
          ))}
        </ul>
        <h2>{listBottom}</h2>
        </div>
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