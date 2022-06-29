import classes from './styles.module.scss'

const CapturedWeights = () => {
  return (
    <main className={classes.container}>
      <div className={classes.weightFunction}>
        <ul>
          <li>1 3000</li>
        </ul>
        <div className={classes.buttons}>
          <div className={classes.select}>
            <button>&#129145;</button>
            <button>&#129147;</button>
          </div>
          <div className={classes.selectFunction}>
            <button>Abort All</button>
            <button>Delete Selected</button>
          </div>
        </div>
      </div>
      <h2>Total: 1 <span>NULL</span></h2>
    </main>
  )
}

export default CapturedWeights