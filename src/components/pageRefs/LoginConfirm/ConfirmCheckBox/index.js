import classes from './styles.module.scss'

const ConfirmCheckBox = ({ onCheck }) => {
  const handleChange = () => {
    onCheck()
  }

  return (
    <div className={classes.checkContainer}>
      <input type='checkbox' onChange={handleChange} />
      <button></button>
      <h2>Show Device Setup</h2>
    </div>
  )
}

export default ConfirmCheckBox
