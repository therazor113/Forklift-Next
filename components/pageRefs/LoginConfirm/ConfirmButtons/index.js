import { useState } from 'react'
import { useRouter } from 'next/router'

import classes from '../styles.module.scss'

const ConfirmButtons = () => {
  const [checkBox, setCheckBox] = useState(false)
  const router = useRouter()
  
  const handleChange = () => {
    setCheckBox(val => val == false ? true : false)
  }

  const handleYes = () => {
    if (checkBox == true) {
      router.push('/deviceSetup')
    } else {
      router.push('/loginSurvey')
    }
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
      <div className={classes.checkContainer}>
          <input type='checkbox' onChange={handleChange} />
          <button></button>
          <h2>Show Device Setup</h2>
      </div>
    </>
  )
}

export default ConfirmButtons