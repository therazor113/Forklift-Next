import { useContext } from 'react'
import { useRouter } from 'next/router'
import { Enter } from './Enter'
import useSelectInput from 'hooks/useSelectInput'
import CurrentProContext from 'contexts/CurrentProContext'
import Keys from 'components/utilities/KeyPad/Keys'

import classes from './styles.module.scss'

const LoadKeypadTerminal = () => {
  const { currentPro, setCurrentPro } = useContext(CurrentProContext)
  const [inputValue, handleChange, setInputValue] = useSelectInput('')
  const router = useRouter()

  const handleEnter = async () => {
    if (!inputValue || inputValue === 0 || inputValue >= 201) {
      alert('please enter a valid door between 1-200')
    } else {
      try {
        const resId = await fetch(`api/DatabaseApi/trailers/location/${inputValue}`)
        const trailerId = await resId.json()
        Enter(currentPro, setCurrentPro, inputValue, trailerId)
        router.push('/moveConfirmation')
      } catch (err) {
        alert('Please enter trailer door dev: 50, 70, 30')
        console.log(err)
      }
    }
  }

  // Keyboard enter pressed
  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleEnter()
    }
  }

  return (
  <main className={classes.keypadBox}>
    <h1>Door Selection</h1>
    <div className={classes.inputContainer}>
      <h2>Enter Door #:</h2>
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

export default LoadKeypadTerminal
