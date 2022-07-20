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

/**
 * import useEditInput from './hooks/useEditInput'
 *
 * const [
 * inputValue,
 * {set value of input box function},
 * setInputValue
 * ] = useEditInput({initial value of input})
 *
 * example:
 * const [inputValue, handleChange] = useFetchInput('')
 *
 */
