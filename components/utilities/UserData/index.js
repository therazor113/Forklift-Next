import { useRouter } from 'next/router'
import { useContext, useState } from "react"
import UserContext from "../../context/UserContext/UserContext"

const UserData = () => {
  const [input, setInput] = useState(null)
  const { setUserData } = useContext(UserContext)
  const router = useRouter()

  const handleInput = (e) => {
		setInput(e.target.value)
	}

  const handleKeyUp = async (e) => {
    if (e.key === 'Enter') {
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
  }

  return (
    <input onChange={handleInput} onKeyUp={handleKeyUp} />
  )
}

export default UserData