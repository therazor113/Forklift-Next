import { useEffect, useRef } from 'react'
import classes from './styles.module.scss'

const SelectButtons = () => {
  const typeRef = useRef()
  const networkRef = useRef()

  useEffect(() => {
    typeRef.current.checked = 'checked'
    networkRef.current.checked = 'checked'
  }, [])

  const handleReweigh = () => {
    
  }

  const handleDMS = () => {
    
  }

  const handleBoth = () => {
    
  }

  const handleWifi = () => {
    
  }

  const handleCellular = () => {
    
  }

  const handleAuto = () => {
    
  }

  return (
    <main className={classes.container}>
      <h2>Type</h2>
      <div>
        <input ref={typeRef} onClick={handleReweigh} type='radio' name='type' />
        <button>Reweigh</button>
      </div>
      <div>
        <input onClick={handleDMS} type='radio' name='type' />
        <button>DMS</button>
      </div>
      <div>
        <input onClick={handleBoth} type='radio' name='type' />
        <button>Both</button>
      </div>
      <h2>Network</h2>
      <div>
        <input ref={networkRef} onClick={handleWifi} type='radio' name='network' />
        <button>Wifi</button>
      </div>
      <div>
        <input onClick={handleCellular} type='radio' name='network' />
        <button>Cellular</button>
      </div>
      <div>
        <input onClick={handleAuto} type='radio' name='network' />
        <button>Auto</button>
      </div>
    </main>
  )
}

export default SelectButtons