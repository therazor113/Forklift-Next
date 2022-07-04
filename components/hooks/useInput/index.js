import { useState } from 'react'

const useInput = initialValues => {
  const [values, setValues] = useState((initialValues))
  return [
    values, 
    e => {
      setValues({
      [e.target.name]: e.target.value
      })
    }
  ]
}

export default useInput

/**
 *  example: 
 *  const [values, handleChange] = useInput({ dataInput: '', nameInput: ''})
 * 
 *    <input name='dataInput' value={values.dataInput} onChange={handleChange} />
 *    <input name='nameInput' value={values.nameInput} onChange={handleChange} />
 */

