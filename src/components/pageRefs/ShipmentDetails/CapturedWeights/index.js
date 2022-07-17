import { useContext, useEffect, useState, useRef } from 'react'
import WeightCaptureContext from 'contexts/WeightCaptureContext'
import { SetTotal } from './SetTotal'
import { WeightListActive } from './WeightListActive'
import DeleteSelected from './DeleteSelected'
import SelectButtons from './SelectButtons'

import classes from './styles.module.scss'

const CapturedWeights = () => {
  const { weightCaptureData, setWeightCaptureData } = useContext(WeightCaptureContext)
  const [{ hu, weight }, setTotal] = useState({ hu: 0, weight: 0 })
  const [count, setCount] = useState(0)
  const [listTop, setListTop] = useState('')
  const [listBottom, setListBottom] = useState('')
  const [select, setSelect] = useState(0)
  const scrollRef = useRef()
  const objRef = useRef()

  // If weightCaptureData increases change select to last in array
  useEffect(() => {
    if (count === 0 || count === 1) return
    setSelect(weightCaptureData.length - 1)
  }, [count, weightCaptureData])

  // Set Total hu/weight & increment count
  useEffect(() => {
    SetTotal(weightCaptureData, setTotal, setCount)
  }, [weightCaptureData])

  // Scroll to weight selected into view
  useEffect(() => {
    objRef.current?.scrollIntoView({ block: 'nearest', inline: 'start' })
  }, [select])

  // Adding and removing '* * * *' when necessary
  useEffect(() => {
    WeightListActive(scrollRef, setListTop, setListBottom)
  }, [select, weightCaptureData])

  // Abort - Reset all values to default
  const handleAbort = () => {
    setWeightCaptureData([])
    setSelect(0)
    setListBottom('')
    setListTop('')
    setCount(0)
  }

  return (
    <main className={classes.container}>
      <div className={classes.weightContainer}>
        <div>
          <h2>{listTop}</h2>
          <ul ref={scrollRef}>
            {weightCaptureData.map((data, index) => (
              <li
              className={index === select ? classes.selected : ''}
              ref={index === select ? objRef : null}
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
        <div className={classes.allButtons}>
          <SelectButtons
            data={weightCaptureData}
            setSelect={setSelect}
          />
          <div className={classes.edit}>
            <button onClick={handleAbort}>Abort All</button>
            <DeleteSelected
              data={weightCaptureData}
              setData={setWeightCaptureData}
              setCount={setCount}
              setSelect={setSelect}
              select={select}
             />
          </div>
        </div>
      </div>
      <h2>Total: {hu} <span>{weight}</span></h2>
    </main>
  )
}

export default CapturedWeights
