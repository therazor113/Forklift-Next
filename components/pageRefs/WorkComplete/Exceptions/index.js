import { useRouter } from 'next/router'

import classes from './styles.module.scss'

const Exceptions = () => {
  const router = useRouter()

  const handleOver = () => {
    router.push('/')
  }

  const handleShort = () => {
    router.push('/')
  }

  const handleDamage = () => {
    router.push('/')
  }

  return (
    <main className={classes.container}>
      <h1>FREIGHT EXCEPTIONS</h1>
      <button onClick={handleOver}>OVER</button>
      <button onClick={handleShort}>SHORT</button>
      <button onClick={handleDamage}>DAMAGE</button>
    </main>
  )
}

export default Exceptions