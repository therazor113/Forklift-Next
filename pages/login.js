import { useState } from 'react'

import Layout from '../components/core/Layout'
import NumPad from '../components/utilities/NumPad'

const Login = () => {
  const [id, setId] = useState('')

  const handleChange = (value) => {
    setId(value)
  }
  
  return (
    <Layout>
      <p>ID: {id}</p>
      <NumPad onChange={handleChange} />
    </Layout>
  )
}

export default Login