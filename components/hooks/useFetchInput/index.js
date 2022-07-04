import { useState } from 'react'
import { useRouter } from 'next/router'

const useFetchInput = (initialValues, route, url, setData1, setData2) => {
  const [inputValue, setInputValue] = useState(initialValues)
  const router = useRouter()

  const handleFetch = async () => {
    try {
     // Fetch data from url + inputValue
      const req = await fetch(url + inputValue)
     // Convert response to json
      const data = await req.json()
     // Sets Data1 to data fetched
      setData1(data)
     // Adds new data fetched to Data2
     if (setData2) {
      setData2(prevData => [...prevData, data])
     }
     // Send to route location
      router.push(route)
    } catch {
     // Error
      console.log('error')
    }
  }

  return [
    inputValue,
    e => {
      setInputValue(e.target.value)
    },
    () => {
      handleFetch()
    },
    setInputValue
  ]
}

export default useFetchInput

/**
 * example:
 * 
 * import useFetchInput from './hooks/useFetchInput'
 * 
 * const [inputValue, {set value of input box function}, {run fetch function}, setInputValue] = useFetchInput(
 *  {initial value of input} {route to send to}, {data to set}, {url to send fetch request})
 * =>
 * const [inputValue, handleChange, handleEnter, setInputValue] = useFetchInput(
 *  '', '/loginConfirm', setUserData, `api/NamesApi/[users]/`)
 * 
 */