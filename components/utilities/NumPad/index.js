import { useState } from 'react'

import NumKey from "../NumKey";

import classes from './styles.module.scss'


let letterArrays = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
  ['J', 'K', 'L']
]

const NumPad = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = () => {
    setCurrentIndex(currentIndex += 1)
    console.log(currentIndex)
  }

  return (
    <main className={classes.numPad}>
      {letterArrays.map((letters, index) => (
        <NumKey
          key={`num-key-${index}`}
          onClick={handleClick}
          id={index}
          letters={letters}
        />
      ))}
    </main>
  )
}


export default NumPad