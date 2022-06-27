import { useRouter } from "next/router"

const FunctionKeys = ({ inputRef, onEnter, onChangeKeys, setInput, onCancel }) => {
  const router = useRouter()
  const BackSpace = () => {
    inputRef.current.value = inputRef.current.value.slice(0, -1)
    setInput(inputRef.current.value)
  }

  const Enter = () => {
    onEnter()
  }

  const Cancel = () => {
    inputRef.current.value = null
    setInput(null)
    onCancel()
    router.push('/')
  }

  const ChangeKeys = () => {
    onChangeKeys()
  }
  

  return (
    <>
      <button onMouseDown={BackSpace}>Back</button>
      <button onMouseDown={Enter}>Enter</button>
      <button onMouseDown={Cancel}>Cancel</button>
      <button onMouseDown={ChangeKeys}>ABC</button>
    </>
  )
}

export default FunctionKeys