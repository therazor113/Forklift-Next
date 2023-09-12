import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import UserContext from 'contexts/UserContext'
import FetchLogIn from 'components/utilities/FetchLogIn'
import useAPI from 'hooks/useAPI'

import classes from './styles.module.scss'

const IndexTerminal = () => {
  const [inputValue, setInputValue] = useState('')
  const [valid, setValid] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const { setUserData } = useContext(UserContext)
  const [handleFetch] = useAPI()
  const router = useRouter()

  const handleSubmit = async () => {
    if (!inputValue) return
    const data = await FetchLogIn(handleFetch, inputValue)
    if (!data) return setValid(false)
    if (data === 'error') {
      setErrorMessage('Database Error - Try again later')
      setTimeout(() => { setErrorMessage('') }, 2000)
      setValid(false)
      return
    }
    setUserData(data)
    router.push('/loginConfirm')
  }

  return (
    <main className={classes.login}>
      <h1>Welcome, please scan your badge</h1>
      <div className={classes.inputContainer}>
        <h2>Badge ID: </h2>
        <div className={classes.inputContainer}>
          <input
            onChange={e => setInputValue(e.target.value)}
            onKeyUp={e => e.key === 'Enter' && handleSubmit()}
            style={!valid ? { borderColor: 'red', outline: 'red' } : {}}
            autoFocus
          />
          { errorMessage &&
          <h3 className={classes.errorMessage}>
            {errorMessage}
          </h3>
          }
        </div>
        <Link href={'/loginKeypad'}>
          <button>&#x2328;</button>
        </Link>
      </div>
      <h2>Available Badges: 123, 234, 345</h2>
    </main>
  )
}

export default IndexTerminal
