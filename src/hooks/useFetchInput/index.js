import { useState } from 'react'

const useFetchInput = (initialValues, url) => {
  const [inputValue, setInputValue] = useState(initialValues)
  const [data, setData] = useState(undefined)

  const handleFetch = () => {
    fetch(url + inputValue)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.log(err))
  }

  return [
    inputValue,
    e => {
      setInputValue(e.target.value)
    },
    () => {
      handleFetch()
    },
    setInputValue,
    data
  ]
}

export default useFetchInput

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
