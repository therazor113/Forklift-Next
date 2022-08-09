import { useContext } from 'react'
import { useRouter } from 'next/router'
import CurrentProContext from 'contexts/CurrentProContext'

import classes from './styles.module.scss'

const ActionButtons = () => {
  const { currentPro } = useContext(CurrentProContext)
  const router = useRouter()

  // Load - Open load keypad
  const handleLoad = () => {
    router.push('/loadKeypad')
  }

  // Dock - Open dock keypad
  const handleDock = () => {
    router.push('/dockKeypad')
  }

  // Write on - send alert ~{will send write on data to database}
  const handleWrite = () => {
    alert(`PRO NUMBER ${currentPro.pronumber} HAS BEEN ENTERED INTO THE SYSTEM AS A WRITE ON!!!`)
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
