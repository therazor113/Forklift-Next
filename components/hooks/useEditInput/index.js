import { useState } from 'react'

const useEditInput = initialInput => {
  const [inputValue, setInputValue] = useState(initialInput)

return [
  inputValue,
  e => {
    setInputValue({
      ...inputValue, [e.target.name]: e.target.value})
    }
  ]
}

export default useEditInput