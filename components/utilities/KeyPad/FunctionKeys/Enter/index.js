const Enter = ({ onEnter }) => {

  const Enter = () => {
    onEnter()
  }

  return (
    <button onMouseDown={Enter}>Enter</button>
  )
}

export default Enter