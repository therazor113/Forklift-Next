import {useContext } from 'react'
import CurrentProContext from '../../context/CurrentProContext'
import PreviousProContext from '../../context/PreviousProContext'
import Keys from '../../utilities/KeyPad/Keys'
import useFetchInput from '../../hooks/useFetchInput'

import classes from './styles.module.scss'

const ManualProEntryTerminal = () => {
  const { setPreviousProData } = useContext(PreviousProContext)
  const { setCurrentPro } = useContext(CurrentProContext)
  const [inputValue, handleChange, handleEnter, setInputValue] = useFetchInput(
    '', '/shipmentDetails', `api/ProNumberApi/[pros]/`, setCurrentPro, setPreviousProData
  )

// Keyboard enter pressed
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
      <input value={inputValue} onChange={handleChange} onKeyUp={handleKeyUp} />
    </div>
      <Keys
      classes={classes}
      inputValue={inputValue}
      setInputValue={setInputValue}
      onEnter={handleEnter}
      />
  </main>
  )
}

export default ManualProEntryTerminal