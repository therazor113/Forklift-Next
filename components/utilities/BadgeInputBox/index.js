import { useState } from 'react'

const BadgeInputBox = ({ sendTo }) => {
  const [title, setTitle] = useState('')

  const handleClick = () => {
		console.log(title)
		if (title == 1234) {
			sendTo = '/login'
		} else {
			sendTo = '/'
		}
	}
  return (
    <>
      <input onChange={event => setTitle(event.target.value)} />
      <button onClick={handleClick}>Test</button>
    </>
  )
}

export default BadgeInputBox