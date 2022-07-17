import { useState } from 'react'
import { useRouter } from 'next/router'
import ConfirmCheckBox from '../ConfirmCheckBox'

import classes from './styles.module.scss'

const ConfirmButtons = () => {
  const [route, setRoute] = useState('/loginSurvey')
  const router = useRouter()

  const handleCheck = () => {
    setRoute(val => val === '/loginSurvey' ? '/deviceSetup' : '/loginSurvey')
  }

  const handleYes = () => {
    router.push(route)
  }

  const handleNo = () => {
    router.push('/')
  }
  return (
    <>
      <div className={classes.buttonDiv}>
        <button onClick={handleYes}>Yes</button>
        <button onClick={handleNo}>No</button>
      </div>
      <ConfirmCheckBox onCheck={handleCheck} />
    </>
  )
}

export default ConfirmButtons
