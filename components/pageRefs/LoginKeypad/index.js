import { useRouter } from 'next/router'
import { useContext, useState, useRef } from "react"
import UserContext from "../../context/UserContext"
import Keys from '../../utilities/KeyPad/Keys'

import classes from './styles.module.scss'

const LoginKeypad = () => {
  const { setUserData } = useContext(UserContext)
  const [input, setInput] = useState(null)
  const inputRef = useRef()
  const router = useRouter()

  const handleInput = () => {
    setInput(inputRef.current.value)
	}

  const handleEnter = async () => {
    try {
      const req = await fetch(`api/NamesApi/[users]/${input}`)
      const data = await req.json()
      setUserData(data)
      console.log(data)
      router.push('/loginConfirm')
    } catch {
      console.log('error')
    }
  }

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
        <input ref={inputRef} onChange={handleInput} onKeyUp={handleKeyUp} />
      </div>
        <Keys
        inputRef={inputRef}
        setInput={setInput}
        onEnter={handleEnter}
        />
    </main>
  )
}

export default LoginKeypad