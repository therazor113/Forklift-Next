import { useState, useEffect, useRef } from "react"
import CancelButton from "../../CancelButton"
import Key from "../Key"

const letterArray = [
  ['_'],
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
  ['J', 'K', 'L'],
  ['M', 'N', 'O'],
  ['P', 'Q', 'R', 'S',],
  ['T', 'U', 'V',],
  ['W', 'X', 'Y', 'Z'],
  ['PalletDeck'], ['LoadBar'], ['Blankets']
]

const numberArray = [
  ['1'], ['2'], ['3'],
  ['4'], ['5'], ['6'],
  ['7'], ['8'], ['9'],
  [''], ['0'], ['']
]

const Keys = ({ inputRef, setInput, onEnter, classes }) => {
  const [currentKey, setCurrentKey] = useState(null)
  const [{ keyName, keyArray }, setKey] = useState({ keyName: true, keyArray: true })
  const timerRef = useRef()

  const keyResetTimer = () => {
    timerRef.current = setTimeout(() => {setCurrentKey(null)}, 650);
  }

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, []);

  const handleClick = ( inputValue, keyId ) => {
    clearTimeout(timerRef.current)
    if (inputRef.current.value.length >= 20) return
	  setCurrentKey(keyId)
    if (keyId == currentKey && isNaN(inputRef.current.value.slice(-1)) && inputValue.length == 1 && inputValue !== '_') {
      inputRef.current.value = inputRef.current.value.slice(0, -1) + inputValue
    } else {
      inputRef.current.value += inputValue
    }
    setInput(inputRef.current.value)
    keyResetTimer()
  }

  const handleChangeKeys = () => {
    setKey(changeKey => ({ keyName : !changeKey.keyName, keyArray: !changeKey.keyArray }))
  }

  const handleBack = () => {
    inputRef.current.value = inputRef.current.value.slice(0, -1)
    setInput(inputRef.current.value)
  }

  return (
    <main className={classes.keypad}>
      <div className={classes.keypadKeys}>
        {(keyArray ? numberArray : letterArray).map((keys, index) => (
          <Key
            key={`key-${index}`}
            id={index}
            currentKey={currentKey}
            onClick={handleClick}
            keyName={keyName}
            keys={keys}
            />
        ))}
      </div>
      <div className={classes.functionKeys}>
        <button onClick={handleBack}>Back</button>
        <button onClick={() => onEnter()}>Enter</button>
        <CancelButton />
        <button onClick={handleChangeKeys}>{keyName ? 'ABC' : '123'}</button>
      </div>
    </main>
  )
}

export default Keys