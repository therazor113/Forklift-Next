import { useContext } from 'react'
import { useRouter } from 'next/router'
import { Enter } from './Enter'
import useSelectInput from 'hooks/useSelectInput'
import CurrentProContext from 'contexts/CurrentProContext'
import Keys from 'components/utilities/KeyPad/Keys'

import classes from './styles.module.scss'

const DockKeypadTerminal = () => {
  const { currentPro, setCurrentPro } = useContext(CurrentProContext)
  const [inputValue, handleChange, setInputValue] = useSelectInput('')
  const router = useRouter()

  const handleEnter = () => {
    if (!inputValue || inputValue === 0 || inputValue >= 201) {
      alert('please enter a valid bay between 1-200')
      return
    }
    Enter(currentPro, setCurrentPro, inputValue)
    router.push('/moveConfirmation')
  }

  // Keyboard enter pressed
  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleEnter()
    }
  }

  return (
  <main className={classes.keypadBox}>
    <h1>Bay Selection</h1>
    <div className={classes.inputContainer}>
      <h2>Enter Bay #:</h2>
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

export default DockKeypadTerminal
