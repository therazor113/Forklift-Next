const SubmitUser = ({ onClick, input }) => {

  const handleClick = async () => {
    try {
      const response = await fetch(`api/NamesApi/${input}`)
      const data = await response.json()
      console.log(data)
      onClick(data)
    } catch {
      console.log('Error')
      onClick([])
    }
  }
  return (
    <button onClick={handleClick}>Set User</button>
  )
}

export default SubmitUser