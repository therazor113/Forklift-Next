import { useContext } from 'react'
import UserContext from '../../../context/UserContext'

import classes from './styles.module.scss'

const WorkName = () => {

  const { userData } = useContext(UserContext)

  return (
    <div className={classes.container}>
      <h2>WELCOME {userData.first} {userData.last}</h2>
    </div>
  )
}

export default WorkName