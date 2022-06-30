import { useContext } from 'react'
import UserContext from '../../context/UserContext'
import LiveGreenSheetButton from '../../utilities/LiveGreenSheetButton'
import LogoutButton from '../../utilities/LogoutButton'
import ManualProButton from '../../utilities/ManualProButton'
import ManifestButton from '../../utilities/ManifestButton'


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