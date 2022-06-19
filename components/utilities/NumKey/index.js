import { useState } from 'react'

import classes from './styles.module.scss'

const NumKey = ({ letters = ['A', 'B', 'C', 'D'], onClick, id}) => {
  const [index, setIndex] = useState(0)

  const handleMouseDown = () => {
    onClick(letters[index], id)
    setIndex(val => val + 1 >= letters.length ? 0 : val + 1)
  }

  return (
    <button
      onMouseDown={handleMouseDown}
      className={classes.numKey}
    >
      {letters.join('')}
    </button>
  )
}

export default NumKey