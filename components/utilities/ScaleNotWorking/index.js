// Sends an alert
const ScaleNotWorking = () => {
  const handleClick = () => {
    alert('Alert! If you continue your supervisor will be notified!')
  }

  return (
    <button onClick={handleClick}>Scale Not Working</button>
  )
}

export default ScaleNotWorking