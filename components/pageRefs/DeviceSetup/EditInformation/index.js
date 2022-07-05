import { useState } from 'react'
import useEditInput from '../../../hooks/useEditInput'

import classes from './styles.module.scss'

const EditInformation = () => {
  const [inputValue, handleChange] = useEditInput({
    term: '',
    fork: '',
    scale: ''
  })
  const [{a, b, c}, setShow] = useState({a: false, b: false, c: false})


  const handleTerminalCode = () => {
    setShow({a: !a, b: false, c: false})
  }

  const handleForkliftID = () => {
    setShow({a: false, b: !b, c: false})
  }

  const handleScaleID = () => {
    setShow({a: false, b: false, c: !c})
  }

  return (
    <main className={classes.container}>
      <h2>Terminal Code:</h2>
        <span>
          {!a && <span>{inputValue.term}</span>}
          {a && <input name='term' value={inputValue.term} onChange={handleChange} />}
        </span>
      <button onClick={handleTerminalCode}>&#x2328;</button>
      <h2>Forklift ID:</h2>
      <span>
          {!b && <span>{inputValue.fork}</span>}
          {b && <input name='fork' value={inputValue.fork} onChange={handleChange} />}
        </span>
      <button onClick={handleForkliftID}>&#x2328;</button>
      <h2>Scale Indicator ID:</h2>
      <span>
          {!c && <span>{inputValue.scale}</span>}
          {c && <input name='scale' value={inputValue.scale} onChange={handleChange} />}
        </span>
      <button onClick={handleScaleID}>&#x2328;</button>
        <br />
      <h2>Device ID:</h2><span>DEV</span>
    </main>
  )
}

export default EditInformation