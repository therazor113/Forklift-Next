const ChangeKeys = ({ onChangeKeys }) => {

  const ChangeKeys = () => {
    onChangeKeys()
  }
  

  return (
    <button onMouseDown={ChangeKeys}>ABC</button>
  )
}

export default ChangeKeys