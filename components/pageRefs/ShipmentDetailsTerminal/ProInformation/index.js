import { useContext } from 'react'
import CurrentProContext from '../../../context/CurrentProContext'

import classes from './styles.module.scss'

const ProInformation = () => {
  const {currentPro, setCurrentPro} = useContext(CurrentProContext) // will use setCurrent later
  return (
    <main className={classes.container}>
      <h2>SH: {currentPro.shipper}</h2>
      <h2>CN: {currentPro.consignee}</h2>
      <div>
      <h2>HU: {currentPro.handlingUnits}</h2>
      <h2>Wgt: {currentPro.weight}</h2>
      <h2>Dim#: {currentPro.dim}</h2>
      </div>
      <h2>Load Door: {currentPro.loadDoor}</h2>
      <h2>Drop#: {currentPro.drop}</h2>
    </main>
  )
}

export default ProInformation