import { useState } from 'react'

const IdRequest = () => {
  const [ids, setId] = useState([])


  const handleClick = async () => {
    const response = await fetch('api/NamesApi')
    const data = await response.json()
    setId(data)
  }

  return (
    <>
    <button onClick={handleClick}>Request ID</button>
      {ids.map((id) => {
        return (
        <div key={id.last}>
          {id.first} {id.last}
        </div>
        )
        })}
    </>
  )
}

export default IdRequest