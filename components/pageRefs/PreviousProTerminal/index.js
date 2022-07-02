import { useContext } from "react"
import PreviousProContext from "../../context/PreviousProContext"
import CancelButton from "../../utilities/CancelButton"
import PreviousProRoutes from "./PreviousProRoutes"

import classes from './styles.module.scss'

const PreviousProTerminal = () => {
  const { previousProData } = useContext(PreviousProContext)

   const newList = previousProData.filter((a,i,f) => 
    f.findIndex(a2 => (a2.proNumber == a.proNumber)) == i).slice(-5)

  return (
    <main className={classes.container}>
      <div className={classes.proButtons}>
      {newList.map((prev) => (
        <PreviousProRoutes
          key={`key-${prev.proNumber}`}
          title={prev.proNumber + ' ' + prev.shipper}
          proRoute={prev}
        />
      ))}
      <h2>Select the Previous Pro</h2>
      </div>
      <div className={classes.cancel}>
        <CancelButton />
      </div>
    </main>
  )
}

export default PreviousProTerminal