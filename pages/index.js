import { useRef } from 'react'

import Layout from '../components/core/Layout'
import LiveClock from '../components/utilities/LiveClock'
import IdRequest from '../components/api/requests/IdRequest'

const Home = () => {
	const inputRef = useRef(null)

	const handleClick = () => {
		if (inputRef.current.value == 123) {
			location.href='/login'
		} else {
			console.log(inputRef.current.value)
		}
	}

  return (
    <Layout>
			<LiveClock />
			<IdRequest />
			<h1>Welcome, please scan your badge</h1>
			<h2>Badge ID:</h2>
			<input ref={inputRef}/>
			<button onClick={handleClick}>Test</button>
		</Layout>
  )
}

export default Home