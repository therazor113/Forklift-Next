const CancelButton = () => {
  const handleCancel = () => {
    history.back()
  }

  return (
    <button onClick={handleCancel}>Cancel</button>
  )
}

export default CancelButton
