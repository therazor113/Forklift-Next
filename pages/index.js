import { useRef, useState } from 'react'

import Layout from '../components/core/Layout'
import LiveClock from '../components/utilities/LiveClock'

const Home = () => {
	const [user, setUser] = useState([])

	const inputRef = useRef(null)

	const handleClick = async () => {
		const response = await fetch(`api/NamesApi/${inputRef.current.value}`)
		const data = await response.json()
		setUser(data.id)
	}

  return (
    <Layout>
			<LiveClock />
			<h2>{user}</h2>
			<h1>Welcome, please scan your badge</h1>
			<h2>Badge ID:</h2>
			<input ref={inputRef}/>
			<button onClick={handleClick}>Test</button>
		</Layout>
  )
}

export default Home