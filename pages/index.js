import { useRef, useState } from 'react'

import Link from 'next/link'
import Layout from '../components/core/Layout'
import SubmitUser from '../components/utilities/SubmitUser'
import TempData from '../components/utilities/TempData'


const Home = () => {
	const [user, setUser] = useState([])
	const [input, setInput] = useState(null)
	const inputRef = useRef(null)

	const handleClick = (userId) => {
		setUser(userId.first)
	}

	const handleInput = () => {
		setInput(inputRef.current.value)
	}

  return (
    <Layout>
			<h2>{user}</h2>
			<h2>{TempData.name}</h2>
			<SubmitUser onClick={handleClick} input={input}/>
			<input ref={inputRef} onChange={handleInput} />
			<Link href='/confirm'>
				<a>Confirm Page</a>
			</Link>
		</Layout>
  )
}

export default Home