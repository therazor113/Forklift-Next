import { useContext, useEffect, useState, useRef } from 'react'
import WeightCaptureContext from '../../../context/WeightCaptureContext'

import classes from './styles.module.scss'

const CapturedWeights = ({}) => {
  const { weightCaptureData, setWeightCaptureData } = useContext(WeightCaptureContext)
  const [{hu, weight}, setTotal] = useState({hu: 0, weight: 0})
  const [select, setSelect] = useState(1)
  const [listTop, setListTop] = useState('')
  const [listBottom, setListBottom] = useState('')
  const scrollRef = useRef()
  const objRef = useRef()

// When weightCaptureData is changed
  useEffect(() => {
  // Set hu and weight total
    if (weightCaptureData.length == 0) {
      setTotal({hu: 0, weight: 0})
    } else {
      setTotal({hu: weightCaptureData.map(i=>i.hu).reduce((x,y)=>x+y),
        weight: weightCaptureData.map(i=>i.weight).reduce((x,y)=>x+y)
      })
    }
  // Order captured weights by id
    weightCaptureData.forEach((item, i) => {item.id = i + 1})
  }, [weightCaptureData])

// Scroll to weight selected
  useEffect(() => {
    if (select !== 1) {
      objRef.current.scrollIntoView({block: 'nearest', inline: 'start'})
    } else if (select == 1) {
      scrollRef.current.scrollTop = 0
    }
  }, [select])

// Adding and removing '* * * *' when necessary
  useEffect(() => {
    const top = scrollRef.current.scrollTop
    const height = scrollRef.current.scrollHeight - 600
  // Add '* * * *' when top weight is not !visible
    if (top !== 0) {
      setListTop('* * * *')
    } else {
      setListTop('')
    }
  // Add '* * * *' when bottom weight is !visible
    if (top !== height) {
      setListBottom('* * * *')
    } else {
      setListBottom('')
    }
  }, [select, weightCaptureData])

// Arrow Up - Select upper weight capture by id
  const handleUp = () => {
    if (weightCaptureData.length == 0) return
    setSelect(val => val - 1 <= weightCaptureData[0].id ? weightCaptureData[0].id : val - 1)
  }

// Arrow Down - Select lower weight capture by id
  const handleDown = () => {
    if (weightCaptureData.length == 0) return
    setSelect(val => 
      val + 1 >= weightCaptureData[weightCaptureData.length - 1].id 
      ? weightCaptureData[weightCaptureData.length - 1].id : val + 1
    )
  }
  
// Abort - Reset all values to default
  const handleAbort = () => {
    setWeightCaptureData([])
    setSelect(1)
    setListBottom('')
    setListTop('')
  }

// Delete - Remove selected weight
  const handleDelete = () => {
    if (weightCaptureData.length == 0) return
  // If selected weight is the lowest in list && list !contain 1 weight => select upper weight capture
    if (weightCaptureData[weightCaptureData.length - 1].id == select && weightCaptureData.length !== 1) {
      setSelect(val => val - 1)
    }
  // Filter selected weight by id and remove it
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
      <h2>Total: {hu} <span>{weight}</span></h2>
    </main>
  )
}

export default CapturedWeights