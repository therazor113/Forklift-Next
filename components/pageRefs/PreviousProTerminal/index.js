import { useContext } from "react"
import PreviousProContext from "../../context/PreviousProContext"
import CancelButton from "../../utilities/CancelButton"
import PreviousProRoutes from "./PreviousProRoutes"

import classes from './styles.module.scss'

const PreviousProTerminal = () => {
  const { previousProData } = useContext(PreviousProContext)

  return (
    <main className={classes.container}>
      <div className={classes.proButtons}>
      <h2>Select the Previous Pro</h2>
      {previousProData.map((prev) => (
        <PreviousProRoutes
          key={`key-${prev.proNumber}`}
          title={prev.proNumber + ' ' + prev.shipper}
          proRoute={prev}
        />
      ))}
      </div>
      <div className={classes.cancel}>
        <CancelButton />
      </div>
    </main>
  )
}

export default PreviousProTerminal