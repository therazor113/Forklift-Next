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
 * import useFetchInput from './hooks/useFetchInput'
 *
 * const [
 * inputValue,
 * {set value of input box function},
 * {run fetch function}, setInputValue,
 * {json data retrieved}
 * ] = useFetchInput({initial value of input}, {url to send fetch request})
 *
 * example:
 * const [
 * inputValue,
 * handleChange,
 * handleEnter,
 * setInputValue,
 * data
 * ] = useFetchInput('', `api/NamesApi/[users]/`)
 *
 */
