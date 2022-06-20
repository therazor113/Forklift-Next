import { useState } from 'react'

const ApiTest = () => {
  const [names, setNames] = useState([])

  const fetchName = async () => {
    const response = await fetch('api/NamesApi')
    const data = await response.json()
    setNames(data)
  }
  return (
    <>
    <button onClick={fetchName}>Name</button>
      {names.map((name) => {
        return (
          <div key={name.id}>
            {name.id} {name.first} {name.last}
          </div>
        )
      })}
    </>
  )
}

export default ApiTest