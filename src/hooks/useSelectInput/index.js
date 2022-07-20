import { useState } from 'react'

const useSelectInput = (initialValues) => {
  const [inputValue, setInputValue] = useState(initialValues)

  return [
    inputValue,
    e => {
      setInputValue(e.target.value)
    },
    setInputValue
  ]
}

export default useSelectInput

/**
 * import useFetchInput from './hooks/useSelectInput'
 *
 * const [
 * inputValue,
 * {set value of input box function},
 * setInputValue
 * ] = useFetchInput({initial value of input})
 *
 * example:
 * const [inputValue, handleChange] = useFetchInput('')
 *
 */
