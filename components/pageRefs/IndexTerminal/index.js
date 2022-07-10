import { useContext, useEffect } from "react"
import { useRouter } from 'next/router'
import Link from "next/link"
import UserContext from "../../context/UserContext"
import useFetchInput from '../../hooks/useFetchInput'

import classes from './styles.module.scss'


const IndexTerminal = () => {
  const { setUserData } = useContext(UserContext)
  const router = useRouter()
  const [
    inputValue,
    handleChange,
    handleEnter,
    setInputValue,
    data
  ] = useFetchInput('', `api/NamesApi/[users]/`)

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
    <h1>Welcome, please scan your badge</h1>
    <div className={classes.inputContainer}>
      <h2>Badge ID: </h2>
      <input value={inputValue} onChange={handleChange} onKeyUp={handleKeyUp} />
      <Link href={'/loginKeypad'}>
        <button>&#x2328;</button>
      </Link>
    </div>
  </main>
  )
}

export default IndexTerminal