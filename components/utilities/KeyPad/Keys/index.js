import { useState, useEffect, useRef } from "react"
import CancelButton from "../../CancelButton"
import Key from "../Key"

// Keypad array types
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

const Keys = ({ inputValue, setInputValue, onEnter, classes }) => {
  const [currentKey, setCurrentKey] = useState(null)
  const [{ keyName, keyArray }, setKey] = useState({ keyName: true, keyArray: true })
  const timerRef = useRef()

// Resets Timer => Resets currentKey
  const keyResetTimer = () => {
    timerRef.current = setTimeout(() => {setCurrentKey(null)}, 650);
  }

// Ends Timer on unmount
  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, []);

  const handleClick = ( keyValue, keyId ) => {
    clearTimeout(timerRef.current)
  // Return if input.length > 20
    if (inputValue.length >= 20) return
    // sets currentKey to key clicked
	  setCurrentKey(keyId)
  // If key clicked == currentKey && previous key is a letter && keyValue == 1
    if (keyId == currentKey && isNaN(inputValue.slice(-1)) && keyValue !== '_' && keyValue.length == 1 ) {
    // Replace current letter with next letter on button clicked
    setInputValue(inputValue.slice(0, -1) + keyValue)
    } else {
    // Add first character on button click
      setInputValue(inputValue += keyValue)
    }
    keyResetTimer()
  }

// Swap keypad - Swaps button title && keyArray type
  const handleChangeKeys = () => {
    setKey(changeKey => ({ keyName : !changeKey.keyName, keyArray: !changeKey.keyArray }))
  }

// Back - Removes last character in input field && Sets input state to new value
  const handleBack = () => {
    setInputValue(inputValue.slice(0, -1))
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