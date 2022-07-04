import { useContext } from 'react'
import CurrentProContext from '../../../context/CurrentProContext'

import classes from './styles.module.scss'

const ActionButtons = () => {
  const { currentPro } = useContext(CurrentProContext)

// Load - Open load keypad
  const handleLoad = () => {
    
  }
  
// Dock - Open dock keypad
  const handleDock = () => {
    
  }

// Write on - send alert ~{will send write on data to api}
  const handleWrite = () => {
    alert(`PRO NUMBER ${currentPro.proNumber} HAS BEEN ENTERED INTO THE SYSTEM AS A WRITE ON!!!`)
  }

  return (
    <main className={classes.container}>
      <button onClick={handleLoad} className={classes.load}>LOAD IT</button>
      <button onClick={handleDock} className={classes.dock}>DOCK IT</button>
      <button onClick={handleWrite} className={classes.write}>WRITE ON</button>
    </main>
  )
}

export default ActionButtons