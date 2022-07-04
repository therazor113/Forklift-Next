import { useContext} from "react"
import UserContext from "../../context/UserContext"
import Keys from '../../utilities/KeyPad/Keys'
import useFetchInput from '../../hooks/useFetchInput'

import classes from './styles.module.scss'

const LoginKeypad = () => {
  const { setUserData } = useContext(UserContext)
  const [inputValue, handleChange, handleEnter, setInputValue] = useFetchInput(
    '', '/loginConfirm', `api/NamesApi/[users]/`, setUserData
  )

// Keyboard enter pressed
  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleEnter()
    }
  }

  return (
    <main className={classes.keypadBox}>
      <h1>Please enter your badge ID. Then press Enter.</h1>
      <div className={classes.inputContainer}>
        <h2>Badge ID:</h2>
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

export default LoginKeypad