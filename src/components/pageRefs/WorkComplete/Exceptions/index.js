import classes from './styles.module.scss'

const Exceptions = () => {
  const handleOver = () => {

  }

  const handleShort = () => {

  }

  const handleDamage = () => {

  }

  return (
    <main className={classes.container}>
      <h1>FREIGHT EXCEPTIONS</h1>
      <button onClick={handleOver}>OVER</button>
      <button onClick={handleShort}>SHORT</button>
      <button onClick={handleDamage}>DAMAGE</button>
    </main>
  )
}

export default Exceptions
