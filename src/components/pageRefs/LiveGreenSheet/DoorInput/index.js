// import { useState } from 'react'

import classes from './styles.module.scss'

const DoorInput = () => {
  // const [input, setInput] = useState('')

  const handleChange = (e) => {
    // setInput(e.target.value)
  }
  return (
    <main className={classes.container}>
      <h2>Door:</h2>
      <input onChange={handleChange} />
      <button>&#x2328;</button>
    </main>
  )
}

export default DoorInput
