import { useRouter } from 'next/router'
import { useContext, useState, useRef } from "react"
import UserContext from "../../context/UserContext"
import Keys from '../KeyPad/Keys'

const UserData = () => {
  const { setUserData } = useContext(UserContext)
  const [input, setInput] = useState(0)
  const inputRef = useRef()
  const router = useRouter()

  const handleInput = () => {
    setInput(inputRef.current.value)
	}

  const handleEnter = async () => {
    try {
      const req = await fetch(`api/NamesApi/${input}`)
      const data = await req.json()
      setUserData(data)
      console.log(data)
      router.push('/confirm')
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
    <>
      <input ref={inputRef} onChange={handleInput} onKeyUp={handleKeyUp} />
      <Keys inputRef={inputRef} setInput={setInput}/>
      <button onClick={handleEnter}>Enter</button>
    </>
  )
}

export default UserData