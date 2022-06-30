import { useContext } from 'react'
import CurrentProContext from '../../../context/CurrentProContext'
import ManualProButton from '../../../utilities/ManualProButton'
import PreviousProButton from '../../../utilities/PreviousProButton'

import classes from './styles.module.scss'

const ProContainer = () => {
  const {currentPro} = useContext(CurrentProContext)

  return (
    <main className={classes.container}>
      <h2>Pro: <span>{currentPro.proNumber}</span></h2>
      <div className={classes.buttons}>
        <ManualProButton title={'Manual Pro'}/>
        <PreviousProButton />
      </div>
    </main>
  )
}

export default ProContainer