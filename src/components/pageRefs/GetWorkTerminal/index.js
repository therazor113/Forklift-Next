import { useContext } from 'react'
import UserContext from 'contexts/UserContext'
import LiveGreenSheetButton from 'components/utilities/LiveGreenSheetButton'
import LogoutButton from 'components/utilities/LogoutButton'
import ManualProButton from 'components/utilities/ManualProButton'
import ManifestButton from 'components/utilities/ManifestButton'

import classes from './styles.module.scss'

const WorkName = () => {
  const { userData } = useContext(UserContext)

  return (
    <main className={classes.container}>
      <h1>WELCOME {userData.first} {userData.last}</h1>
      <div className={classes.userButtons}>
        <LogoutButton title={'LOG OFF'}/>
        <ManifestButton title={'RETRY'} />
      </div>
      <h2>There is no assignment available. Please see your Supervisor <br/> or click RETRY</h2>
      <div className={classes.navButtons}>
        <LiveGreenSheetButton title={'Live Green Sheet'} />
        <ManualProButton title={'MANUAL PRO ENTRY'} />
      </div>
    </main>
  )
}

export default WorkName
