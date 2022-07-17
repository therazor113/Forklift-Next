import { useEffect, useState, useRef } from 'react'
import useEditInput from 'hooks/useEditInput'

import classes from './styles.module.scss'

const EditInformation = ({ submit, edit }) => {
  const initialTerm = typeof window !== 'undefined' ? localStorage.getItem('term') : ''
  const initialFork = typeof window !== 'undefined' ? localStorage.getItem('fork') : ''
  const initialScale = typeof window !== 'undefined' ? localStorage.getItem('scale') : ''
  const [inputValue, handleChange] = useEditInput({
    term: initialTerm !== null ? initialTerm : '',
    fork: initialFork !== null ? initialFork : '',
    scale: initialScale !== null ? initialScale : ''
  })
  const [{ a, b, c, d }, setShow] = useState({ a: false, b: false, c: false, d: false })
  const setLocalStorage = useRef(() => {})

  useEffect(() => {
    setLocalStorage.current()
  }, [submit])

  useEffect(() => {
    if (edit) {
      setShow({ a: false, b: false, c: false, d: true })
    } else if (!edit) {
      setShow({ a: false, b: false, c: false, d: false })
    }
  }, [edit])

  setLocalStorage.current = () => {
    localStorage.setItem('term', inputValue.term)
    localStorage.setItem('fork', inputValue.fork)
    localStorage.setItem('scale', inputValue.scale)
  }

  const handleTerminalCode = () => {
    setShow({ a: !a, b: false, c: false, d: true })
  }

  const handleForkliftID = () => {
    setShow({ a: false, b: !b, c: false, d: true })
  }

  const handleScaleID = () => {
    setShow({ a: false, b: false, c: !c, d: true })
  }

  return (
    <main className={classes.container}>
      <h2>Terminal Code:</h2>
        <span>
          {!a && <span suppressHydrationWarning>{inputValue.term}</span>}
          {a && <input name='term' value={inputValue.term} onChange={handleChange} />}
        </span>
      {d && <button onClick={handleTerminalCode}>&#x2328;</button>}
      <h2>Forklift ID:</h2>
      <span>
          {!b && <span suppressHydrationWarning>{inputValue.fork}</span>}
          {b && <input name='fork' value={inputValue.fork} onChange={handleChange} />}
        </span>
      {d && <button onClick={handleForkliftID}>&#x2328;</button>}
      <h2>Scale Indicator ID:</h2>
      <span>
          {!c && <span suppressHydrationWarning>{inputValue.scale}</span>}
          {c && <input name='scale' value={inputValue.scale} onChange={handleChange} />}
        </span>
      {d && <button onClick={handleScaleID}>&#x2328;</button>}
      <span />
      <h2>Device ID:</h2><span>DEV</span>
    </main>
  )
}

export default EditInformation
