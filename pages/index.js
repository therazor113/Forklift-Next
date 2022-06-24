import { useRef, useState } from 'react'

import Link from 'next/link'
import Layout from '../components/core/Layout'
import UserData from '../components/utilities/UserData'
import { UserProvider } from './UserContext'

const Home = () => {
	const [user, setUser] = useState([])
	const [input, setInput] = useState(null)
	const inputRef = useRef(null)

	const handleInput = () => {
		setInput(inputRef.current.value)
	}

	const handleData = (data) => {
		setUser(data)
		console.log(data)
	}

  return (
		<UserProvider>
			<Layout>
				
				<input ref={inputRef} onChange={handleInput} />
				<UserData onClick={handleData} input={input}/>

				<Link href='/confirm'>
					<a>Confirm Page</a>
				</Link>
			</Layout>
		</UserProvider>
  )
}

export default Home