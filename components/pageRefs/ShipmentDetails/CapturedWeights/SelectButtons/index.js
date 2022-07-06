import classes from './styles.module.scss'

const SelectButtons = ({data, setSelect}) => {

  // Arrow Up - Select upper weight capture by id
  const handleUp = () => {
    if (data.length == 0) return
    setSelect(val => val - 1 <= data[0].id ? data[0].id : val - 1)
  }

  // Arrow Down - Select lower weight capture by id
  const handleDown = () => {
    if (data.length == 0) return
    setSelect(val => 
      val + 1 >= data[data.length - 1].id 
      ? data[data.length - 1].id : val + 1
    )
  }
  return (
    <main className={classes.container}>
      <button onClick={handleUp}>&#129145;</button>
      <button onClick={handleDown}>&#129147;</button>
    </main>
  )
}

export default SelectButtons