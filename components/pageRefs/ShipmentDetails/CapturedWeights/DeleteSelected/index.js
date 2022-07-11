const DeleteSelected = ({data, setData, setCount, setSelect, select}) => {
  const handleDelete = () => {
    if (!data.length) return
  // If selected weight is the lowest in list && list !contain 1 weight => Select upper weight
    if (data.length - 1 == select) {
      setSelect(val => val - 1 <= 0 ? 0 : val - 1)
    }
  // Create temp array => delete selected => setData to newList
    const newList = [...data]
    newList.splice(select, 1)
    setData(newList)
  // Reset count
    setCount(0)
    }

  return (
    <button onClick={handleDelete}>Delete Selected</button>
  )
}

export default DeleteSelected