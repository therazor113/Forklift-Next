import { useRef, useState } from 'react'

import Layout from '../components/core/Layout'
import BadgeInputBox from '../components/utilities/BadgeInputBox'
import LiveClock from '../components/utilities/LiveClock'

const Home = () => {
	const [user, setUser] = useState([])
	const [inputValue, setInputValue] = useState([])
	const inputRef = useRef(null)

	const handleClick = (result) => {
		setUser(result)
	}

	const handleInput = () => {
		setInputValue(inputRef.current.value)
	}

  return (
    <Layout>
			<LiveClock />
			<BadgeInputBox
			onClick={handleClick}
			inputValue={inputValue}
			/>
			<h2>{user}</h2>
			<h1>Welcome, please scan your badge</h1>
			<h2>Badge ID:</h2>
			<input ref={inputRef} onChange={handleInput} />
		</Layout>
  )
}

export default Home