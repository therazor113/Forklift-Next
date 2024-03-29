import { useContext } from 'react'
import { useRouter } from 'next/router'
import CurrentProContext from 'contexts/CurrentProContext'

import classes from './styles.module.scss'

const ProInformation = () => {
  const { currentPro } = useContext(CurrentProContext)
  const router = useRouter()

  // Send to proDetails if available
  const handleClick = () => {
    if (currentPro.length !== 0) {
      router.push('/proDetails')
    }
  }

  return (
    <main className={classes.container}>
      <div className={classes.pro}>
      <h2>Pro#: </h2>
      <button onClick={handleClick}>{currentPro.pronumber}</button>
      </div>
      <div className={classes.header}>
        <h1>SHIPPER&nbsp;</h1>
        <p>{currentPro.shipper}</p>
      </div>
      <div className={classes.header}>
        <h1>CUSTOMER&nbsp;</h1>
        <p>{currentPro.consignee}</p>
      </div>
      <div className={classes.info}>
        <h2>
          HU: <span>{currentPro.handlingunits}</span>,
          WEIGHT: <span>{currentPro.totalweight}</span>,
          PIECES: <span>{currentPro.pieces}</span>
        </h2>
        <h2>
          LOAD DOOR(S): <span>{currentPro.dest}</span>,
          DISPATCH TO: <span>{currentPro.dispatch}</span>
        </h2>
        <h2>FINAL DEST: <span>{currentPro.final}</span></h2>
      </div>
    </main>
  )
}

export default ProInformation
