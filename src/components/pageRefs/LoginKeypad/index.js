import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import UserContext from 'contexts/UserContext'
import Keys from 'components/utilities/KeyPad/Keys'
import FetchLogIn from 'components/utilities/FetchLogIn'
import useAPI from 'hooks/useAPI'

import classes from './styles.module.scss'

const LoginKeypad = () => {
  const [inputValue, setInputValue] = useState('')
  const [valid, setValid] = useState(true)
  const { setUserData } = useContext(UserContext)
  const [handleFetch] = useAPI()
  const router = useRouter()

  const handleSubmit = async () => {
    if (!inputValue) return
    const data = await FetchLogIn(handleFetch, inputValue)
    if (!data) return setValid(false)
    setUserData(data)
    router.push('/loginConfirm')
  }

  return (
    <main className={classes.keypadBox}>
      <h2>Available Badges: 123, 234, 345</h2>
      <h1>Please enter your badge ID. Then press Enter.</h1>
      <div className={classes.inputContainer}>
        <h2>Badge ID:</h2>
        <input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyUp={e => e.key === 'Enter' && handleSubmit()}
          style={!valid ? { borderColor: 'red', outline: 'red' } : {}}
          autoFocus
        />
      </div>
        <Keys
          classes={classes}
          inputValue={inputValue}
          setInputValue={setInputValue}
          onEnter={handleSubmit}
        />
    </main>
  )
}

export default LoginKeypad
