import { useContext } from 'react'
import LogoutButton from '../../../utilities/LogoutButton'
import UserContext from '../../../context/UserContext'

import classes from './styles.module.scss'

const Information = () => {
  const { userData } = useContext(UserContext)
  
  return (
    <main className={classes.container}>
      <div className={classes.infoText}>
        <h2>Dimensioner: <span>N/A</span></h2>
        <h2>ScaleID: <span>N/A</span></h2>
        <h2>ForkliftID: <span>N/A</span></h2>
        <h2>Term: <span>N/A</span></h2>
        <h2>Badge#: <span>{userData.id}</span></h2>
      </div>
      <div className={classes.logout}>
        <LogoutButton title={'Logout'} />
      </div>
    </main>
  )
}

export default Information