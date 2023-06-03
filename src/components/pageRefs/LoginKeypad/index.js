import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import UserContext from 'contexts/UserContext'
import Keys from 'components/utilities/KeyPad/Keys'
import useFetchInput from 'hooks/useFetchInput'

import classes from './styles.module.scss'

const LoginKeypad = () => {
  const router = useRouter()
  const { setUserData } = useContext(UserContext)
  const [
    inputValue,
    handleChange,
    handleEnter,
    setInputValue,
    data
  ] = useFetchInput('', 'api/UsersApi/')

  // setUserData when data changes
  useEffect(() => {
    if (data) {
      setUserData(data)
      router.push('/loginConfirm')
    }
  }, [data, setUserData, router])
  // Keyboard enter pressed
  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleEnter()
    }
  }

  return (
    <main className={classes.keypadBox}>
      <h2>Available Badges: 123, 234, 345</h2>
      <h1>Please enter your badge ID. Then press Enter.</h1>
      <div className={classes.inputContainer}>
        <h2>Badge ID:</h2>
        <input value={inputValue} onChange={handleChange} /* onKeyUp={handleKeyUp} */ autoFocus/>
      </div>
        <Keys
          classes={classes}
          inputValue={inputValue}
          setInputValue={setInputValue}
          onEnter={() => {/*Disabled*/}}
        />
    </main>
  )
}

export default LoginKeypad
