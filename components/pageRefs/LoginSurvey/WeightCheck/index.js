import { useContext } from 'react'
import WeightContext from '../../../context/WeightContext'

import classes from './styles.module.scss'

const WeightCheck = () => {
  const { weightData, setWeightData } = useContext(WeightContext)

  const handleZero = () => {
    setWeightData(0)
  }
  
  const handleNoScale = () => {
    alert('Alert! If you continue your supervisor will be notified!')
  }

  return (
    <main className={classes.container}>
      <div className={classes.weightDiv}>
        <h2>Weight: </h2>
        <span>{weightData}</span>
      </div>
      <div className={classes.buttonDiv}>
        <button onClick={handleZero}>Zero Scale</button>
        <button onClick={handleNoScale}>Scale Not Working</button>
      </div>
    </main>
  )
}

export default WeightCheck