import classes from './styles.module.scss'

const SelectButtons = () => {

  return (
    <main className={classes.container}>
      <h2>Type</h2>
      <div>
        <input type='radio' name='type' />
        <button>Reweigh</button>
      </div>
      <div>
        <input type='radio' name='type' />
        <button>DMS</button>
      </div>
      <div>
        <input type='radio' name='type' />
        <button>Both</button>
      </div>
      <h2>Network</h2>
      <div>
        <input type='radio' name='network' />
        <button>Wifi</button>
      </div>
      <div>
        <input type='radio' name='network' />
        <button>Cellular</button>
      </div>
      <div>
        <input type='radio' name='network' />
        <button>Auto</button>
      </div>
    </main>
  )
}

export default SelectButtons