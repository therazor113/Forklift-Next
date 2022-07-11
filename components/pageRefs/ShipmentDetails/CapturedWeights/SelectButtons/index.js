import classes from './styles.module.scss'

const SelectButtons = ({data, setSelect}) => {
  // Arrow Up - Select upper weight capture
  const handleUp = () => {
    setSelect(val => val - 1 <= 0 ? 0 : val - 1)
  }
  
  // Arrow Down - Select lower weight capture
  const handleDown = () => {
    setSelect(val => val + 1 >= data.length - 1 ? data.length - 1 : val + 1)
  }

  return (
    <main className={classes.container}>
      <button onClick={handleUp}>&#129145;</button>
      <button onClick={handleDown}>&#129147;</button>
    </main>
  )
}

export default SelectButtons