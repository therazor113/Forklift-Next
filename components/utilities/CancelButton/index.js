const CancelButton = () => {

  const handleClick = () => {
    history.back()
  }

  return (
    <button onClick={handleClick}>Cancel</button>
  )
}

export default CancelButton