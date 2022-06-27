import { useRouter } from 'next/router'

import classes from '../styles.module.scss'

const ConfirmButtons = () => {
  const router = useRouter()
  const handleYes = () => {

  }

  const handleNo = () => {
    router.push('/')
  }
  return (
    <div className={classes.buttonDiv}>
    <button onClick={handleYes}>Yes</button>
    <button onClick={handleNo}>No</button>
    </div>
  )
}

export default ConfirmButtons