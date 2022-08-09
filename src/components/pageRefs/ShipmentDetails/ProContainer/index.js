import { useContext } from 'react'
import CurrentProContext from 'contexts/CurrentProContext'
import ManualProButton from 'components/utilities/ManualProButton'
import PreviousProButton from 'components/utilities/PreviousProButton'

import classes from './styles.module.scss'

const ProContainer = () => {
  const { currentPro } = useContext(CurrentProContext)

  return (
    <main className={classes.container}>
      <h2>Pro: <span>{currentPro.pronumber}</span></h2>
      <div className={classes.buttons}>
        <ManualProButton title={'Manual Pro'}/>
        <PreviousProButton />
      </div>
    </main>
  )
}

export default ProContainer
