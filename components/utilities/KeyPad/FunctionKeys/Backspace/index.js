const Backspace = ({ inputRef, setInput }) => {

  const BackSpace = () => {
    inputRef.current.value = inputRef.current.value.slice(0, -1)
    setInput(inputRef.current.value)
  }

  return (
    <button onMouseDown={BackSpace}>Back</button>
  )
}

export default Backspace