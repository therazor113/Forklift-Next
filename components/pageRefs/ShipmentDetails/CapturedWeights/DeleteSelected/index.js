const DeleteSelected = ({data, setData, setCount, setSelect, select}) => {

  const handleDelete = () => {
    if (data.length == 0) return
  // If selected weight is the lowest in list && list !contain 1 weight
    if (data[data.length - 1].id == select && data.length !== 1) {
    // select upper weight capture
      setSelect(val => val - 1)
    }
    // Filter selected weight by id and remove it
      setData(data.filter((list) => list.id !== select))
      setCount(0)
    }

  return (
    <button onClick={handleDelete}>Delete Selected</button>
  )
}

export default DeleteSelected