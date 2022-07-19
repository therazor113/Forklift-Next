import { useContext } from 'react'
import UserContext from 'contexts/UserContext'

import classes from './styles.module.scss'

const ConfirmName = () => {
  const { userData } = useContext(UserContext)

  return (
    <div className={classes.container}>
      <h2>Welcome</h2>
      <h2>Are You {userData.firstName} {userData.lastName} ?</h2>
    </div>
  )
}

export default ConfirmName
