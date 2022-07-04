import { useContext } from 'react'
import CurrentProContext from '../../../context/CurrentProContext'

import classes from './styles.module.scss'

const ProInformation = () => {
  const { currentPro } = useContext(CurrentProContext)

  return (
    <main className={classes.container}>
      <h2>SH: <span>{currentPro.shipper}</span></h2>
      <h2>CN: <span>{currentPro.consignee}</span></h2>
      <div>
      <h2>HU: <span>{currentPro.handlingUnits}</span></h2>
      <h2>Wgt: <span>{currentPro.weight}</span></h2>
      <h2>Dim#: <span>{currentPro.dim}</span></h2>
      </div>
      <h2>Load Door: <span>{currentPro.dest}</span></h2>
      <h2>Drop#: <span>{currentPro.drop}</span></h2>
    </main>
  )
}

export default ProInformation