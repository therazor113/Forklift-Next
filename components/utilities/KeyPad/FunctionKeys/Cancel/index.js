import { useRouter } from "next/router"

const Cancel = ({ inputRef, setInput, onCancel }) => {
  const router = useRouter()

  const Cancel = () => {
    inputRef.current.value = null
    setInput(null)
    onCancel()
    router.push('/')
  }

  return (
    <button onMouseDown={Cancel}>Cancel</button>
  )
}

export default Cancel