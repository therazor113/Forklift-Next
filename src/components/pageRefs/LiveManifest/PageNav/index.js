import classes from './styles.module.scss'

const PageNav = () => {
  const handleNext = () => {

  }

  const handlePrev = () => {

  }

  return (
    <main className={classes.container}>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </main>
  )
}

export default PageNav
