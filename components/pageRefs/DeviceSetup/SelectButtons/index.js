import classes from './styles.module.scss'

const SelectButtons = () => {
  return (
    <main className={classes.container}>
      <h2>Type</h2>
      <button>Reweigh</button>
      <button>DMS</button>
      <button>Both</button>
      <h2>Network</h2>
      <button>WIFI</button>
      <button>Cellular</button>
      <button>Auto</button>
    </main>
  )
}

export default SelectButtons