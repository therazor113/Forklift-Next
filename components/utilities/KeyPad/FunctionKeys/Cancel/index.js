const Cancel = ({ onCancel }) => {

  const Cancel = () => {
    history.back()
    onCancel()
  }

  return (
    <button onMouseDown={Cancel}>Cancel</button>
  )
}

export default Cancel