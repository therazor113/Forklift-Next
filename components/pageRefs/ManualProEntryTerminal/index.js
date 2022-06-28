import { useRef, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import CurrentProContext from '../../context/CurrentProContext'
import Keys from '../../utilities/KeyPad/Keys'

import classes from './styles.module.scss'

const ManualProEntryTerminal = () => {
  const [input, setInput] = useState(null)
  const { setCurrentPro } = useContext(CurrentProContext)
  const router = useRouter()
  const inputRef = useRef()

  const handleEnter = async () => {
    try {
    const res = await fetch(`api/ProNumberApi/[pros]/${input}`)
    const data = await res.json()
    setCurrentPro(data)
    console.log(data)
    router.push('/shipmentDetails')
    } catch {
      console.log('Error')
    }
  }

  const handleInput = () => {
    setInput(inputRef.current.value)
  }

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleEnter()
    }
  }

  return (
  <main className={classes.keypadBox}>
    <h1>Please enter a pro number</h1>
    <div className={classes.inputContainer}>
      <h2>Pro Number:</h2>
      <input ref={inputRef} onChange={handleInput} onKeyUp={handleKeyUp} />
    </div>
      <Keys
      classes={classes}
      inputRef={inputRef}
      setInput={setInput}
      onEnter={handleEnter}
      />
  </main>
  )
}

export default ManualProEntryTerminal