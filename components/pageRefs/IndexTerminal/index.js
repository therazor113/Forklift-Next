import Link from 'next/link'
import classes from './styles.module.scss'
import { useRouter } from 'next/router'
import { useContext, useState, useRef } from "react"
import UserContext from "../../context/UserContext"


const IndexTerminal = () => {
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
  <main className={classes.login}>
    <h1>Welcome, please scan your badge</h1>
    <div className={classes.inputContainer}>
      <h2>Badge ID: </h2>
      <input ref={inputRef} onChange={handleInput} onKeyUp={handleKeyUp} />
      <Link href={'/loginKeypad'}>
        <button>&#x2328;</button>
      </Link>
    </div>
  </main>
  )
}

export default IndexTerminal