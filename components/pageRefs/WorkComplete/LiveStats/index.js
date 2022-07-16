import { useContext } from 'react'
import CurrentProContext from '../../../context/CurrentProContext/index'


import classes from './styles.module.scss'

const LiveStats = () => {
  const { currentPro, setCurrentPro } = useContext(CurrentProContext)

  console.log(currentPro)

  return (
    <main className={classes.container}>
      <h2 className={classes.proInfo}>PRO: {currentPro.proNumber}<br/> 
      {currentPro.loaded && `NOW LOADED IN DOOR ${currentPro.loaded} ON TRAILER ${null}`}
      {currentPro.docked && `SCANNED AND DOCKED IN BAY ${currentPro.docked}`}
      </h2>
    </main>
  )
}

export default LiveStats

// swap loaded and docked to checking if it has a docked or null attribute in the object of currentPro
// currentPro.docked
// currentPro.loaded

// also clear the other when you set it, like when docked you should clear loaded to null

// clear currentPro when you hit either ok or get assignment