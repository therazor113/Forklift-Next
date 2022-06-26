import { useState, useEffect, useRef } from "react"
import Key from "../Key"

const letterArray = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
  ['J', 'K', 'L'],
  ['M', 'N', 'O'],
  ['P', 'Q', 'R', 'S',],
  ['T', 'U', 'V',],
  ['W', 'X', 'Y', 'Z']
]

const numberArray = [
  ['1'], ['2'], ['3'],
  ['4'], ['5'], ['6'],
  ['7'], ['8'], ['9'],
  ['0']
]

const Keys = ({ inputRef, setInput }) => {
  const [keyType, setKeyType] = useState('ABC')
  const [keyArray, setKeyArray] = useState(numberArray)
  const [currentKey, setCurrentKey] = useState(null)
  const timerRef = useRef()

  const handleKeyType = () => {
    setKeyType(val => val == 'ABC' ? '123' : 'ABC')
    setKeyArray(val => val == numberArray ? letterArray : numberArray)
  }

  const keyResetTimer = () => {
    timerRef.current = setTimeout(() => {setCurrentKey(null), console.log(0)}, 650);
  }

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, []);

  const handleClick = ( inputValue, keyId ) => {
    clearTimeout(timerRef.current)
	  setCurrentKey(keyId)
    if (keyId == currentKey && isNaN(inputRef.current.value.slice(-1))) {
      inputRef.current.value = inputRef.current.value.slice(0, -1) + inputValue
    } else {
      inputRef.current.value += inputValue
    }
    setInput(inputRef.current.value)
    keyResetTimer()
  }

  return (
    <main>
      <button onClick={handleKeyType}>{keyType}</button>
      {keyArray.map((keys, index) => (
        <Key
          key={`key-${index}`}
          id={index}
          currentKey={currentKey}
          onClick={handleClick}
          keyType={keyType}
          keys={keys}
          />
      ))}
    </main>
  )
}

export default Keys