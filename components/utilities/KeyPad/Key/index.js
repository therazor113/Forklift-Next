import { useState, useEffect } from "react"
const Key = ({ keys, keyType, id, currentKey, onClick }) => {
  const [index, setIndex] = useState(0)

  const handleClick = () => {
    if (keyType == 'ABC') {
      onClick(keys, id)
      setIndex(0)
    } else {
      setIndex(val => val + 1 >= keys.length ? 0 : val + 1)
      onClick(keys[index], id)
    }
  }

  useEffect(() => {
		if (currentKey !== id) {
			setIndex(0)
		}
	}, [currentKey, id])

  return (
    <button onClick={handleClick}>{keys.join('')}</button>
  )
}

export default Key