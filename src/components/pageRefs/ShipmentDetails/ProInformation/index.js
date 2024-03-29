import { useContext } from 'react'
import CurrentProContext from 'contexts/CurrentProContext'

import classes from './styles.module.scss'

const ProInformation = () => {
  const { currentPro } = useContext(CurrentProContext)

  return (
    <main className={classes.container}>
      <h2>SH: <span>{currentPro.shipper}</span></h2>
      <h2>CN: <span>{currentPro.consignee}</span></h2>
      <div>
      <h2>HU: <span>{currentPro.handlingunits}</span></h2>
      <h2>Wgt: <span>{currentPro.totalweight}</span></h2>
      <h2>Dim#: <span>{currentPro.dim}</span></h2>
      </div>
      <h2>Load Door: <span>{currentPro.dest}</span></h2>
      <h2>Drop#: <span>{currentPro.droplocation}</span></h2>
    </main>
  )
}

export default ProInformation
