import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import UserContext from 'contexts/UserContext'
import useFetchInput from 'hooks/useFetchInput'

import classes from './styles.module.scss'

const IndexTerminal = () => {
  const { setUserData } = useContext(UserContext)
  const router = useRouter()
  const [
    inputValue,
    handleChange,
    handleEnter,,
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
    <main className={classes.login}>
      <h1 style={{color: '#E51A36'}}>Currently under renovations!</h1>
      <h2>
        check out <a style={{color: '#FF0000'}} href='https://github.com/therazor113/Forklift-Next'
        >GitHub</a> for more details
      </h2>
      <h1>Welcome, please scan your badge</h1>
      <div className={classes.inputContainer}>
        <h2>Badge ID: </h2>
        <input value={inputValue} onChange={handleChange} /* onKeyUp={handleKeyUp} */ autoFocus />
        <Link href={'/loginKeypad'}>
          <button>&#x2328;</button>
        </Link>
      </div>
      <h2>Available Badges: 123, 234, 345</h2>
    </main>
  )
}

export default IndexTerminal
