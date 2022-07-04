import { useState, useEffect } from 'react'

const Key = ({ keys, keyName, id, currentKey, onClick }) => {
  const [index, setIndex] = useState(0)

// When currentKey and/or id change
  useEffect(() => {
    // If previous key !== key clicked => Reset index
      if (currentKey !== id) {
        setIndex(0)
      }
    }, [currentKey, id])

  const handleClick = () => {
    // If keypad == numbers => Send key value & id of key clicked to handleClick()
    if (keyName == true) {
      onClick(keys, id)
      setIndex(0)
    } else {
    // If keypad == letters => Send index of key value & id of key clicked to handleClick()
      setIndex(val => val + 1 >= keys.length ? 0 : val + 1)
      onClick(keys[index], id)
    }
  }

  return (
    <button onMouseDown={handleClick}>{keys.join('')}</button>
  )
}

export default Key