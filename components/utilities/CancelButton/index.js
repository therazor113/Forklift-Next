// Sends to previous page
const CancelButton = () => {
  return (
    <button onClick={() => history.back()}>Cancel</button>
  )
}

export default CancelButton