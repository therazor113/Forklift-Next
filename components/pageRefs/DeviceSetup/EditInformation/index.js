import classes from './styles.module.scss'

const EditInformation = () => {

  const handleTerminalCode = () => {

  }

  const handleForkliftID = () => {
    
  }

  const handleScaleID = () => {
    
  }

  return (
    <main className={classes.container}>
      <h2>Terminal Code:</h2>
        <span>NULL</span>
      <button onClick={handleTerminalCode}>&#x2328;</button>
      <h2>Forklift ID:</h2>
        <span>NULL</span>
      <button onClick={handleForkliftID}>&#x2328;</button>
      <h2>Scale Indicator ID:</h2>
        <span>NULL</span>
      <button onClick={handleScaleID}>&#x2328;</button>
        <br />
      <h2>Device ID:</h2><span>NULL</span>
    </main>
  )
}

export default EditInformation


/**
 * const handleEdit = () => {
 *  if (edit == false) {
 *    use <input> insead of <span> for info
 *  }
 *  return (
 *  )
 * }
 */