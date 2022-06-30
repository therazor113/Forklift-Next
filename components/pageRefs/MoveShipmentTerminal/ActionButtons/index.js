import { useContext } from 'react'
import CurrentProContext from '../../../context/CurrentProContext'

import classes from './styles.module.scss'

const ActionButtons = () => {
  const { currentPro } = useContext(CurrentProContext)

  const handleLoad = () => {
    //return (<keypad title={'Door Selection'} label={'Enter Door #:'}>)?
  }
  
  const handleDock = () => {
    //return (<keypad title={'Bay Selection'} label={'Enter Bay #:'}>)?
  }
  
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