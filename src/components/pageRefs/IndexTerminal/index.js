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
    <main className={classes.login}>
      <h1>Welcome, please scan your badge</h1>
      <div className={classes.inputContainer}>
        <h2>Badge ID: </h2>
        <input
          onChange={e => setInputValue(e.target.value)}
          onKeyUp={e => e.key === 'Enter' && handleSubmit()}
          style={!valid ? { borderColor: 'red', outline: 'red' } : {}}
          autoFocus
        />
        <Link href={'/loginKeypad'}>
          <button>&#x2328;</button>
        </Link>
      </div>
      <h2>Available Badges: 123, 234, 345</h2>
    </main>
  )
}

export default IndexTerminal
