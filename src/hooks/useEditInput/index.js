import { useState } from 'react'

const useEditInput = initialInput => {
  const [inputValue, setInputValue] = useState(initialInput)

  return [
    inputValue,
    e => {
      if (e.target.value.length === 8) return
      setInputValue({ ...inputValue, [e.target.name]: e.target.value.toUpperCase() })
    }
  ]
}

export default useEditInput
