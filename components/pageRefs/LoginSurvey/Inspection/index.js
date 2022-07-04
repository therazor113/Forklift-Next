import { useRouter } from 'next/router'
import { useContext } from 'react'
import WeightContext from '../../../context/WeightContext'
import classes from './styles.module.scss'

const Inspection = () => {
  const { weightData } = useContext(WeightContext)
  const router = useRouter()

  const handleYes = () => {
  // if weightData = 0 => send to getWork
    if (weightData === 0) {
      router.push('/getWork')
    } else {
      alert('Zero scale to continue')
    }
  }

  const handleNo = () => {
    alert('Please inspect your forklift before continuing')
  }
  
  return (
    <main className={classes.container}>
      <h2>Equipment inspection<br/>completed?</h2>
      <div className={classes.buttonDiv}>
        <button onClick={handleYes}>Yes</button>
        <button onClick={handleNo}>No</button>
      </div>
    </main>
  )
}

export default Inspection