import { useContext } from 'react'
import WeightContext from '../../../context/WeightContext'
import ScaleNotWorking from '../../../utilities/ScaleNotWorking'
import ZeroScale from '../../../utilities/ZeroScale'

import classes from './styles.module.scss'

const WeightCheck = () => {
  const { weightData } = useContext(WeightContext)

  return (
    <main className={classes.container}>
      <div className={classes.weightDiv}>
        <h2>Weight: </h2>
        <span>{weightData}</span>
      </div>
      <div className={classes.buttonDiv}>
        <ZeroScale />
        <ScaleNotWorking />
      </div>
    </main>
  )
}

export default WeightCheck