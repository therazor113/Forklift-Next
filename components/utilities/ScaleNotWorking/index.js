const ScaleNotWorking = () => {

  const handleClick = () => {
    // will replace with a prompt
    alert('Alert! If you continue your supervisor will be notified!')
  }

  return (
    <button onClick={handleClick}>Scale Not Working</button>
  )
}

export default ScaleNotWorking