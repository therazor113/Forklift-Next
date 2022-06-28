import { useRouter } from 'next/router'

import classes from './styles.module.scss'

const NavButtons = () => {
  const router = useRouter()

  const handleEdit = () => {

  }

  const handleSubmit = () => {
    
  }

  const handleCancel = () => {
    router.push('/getWork')
  }
  return (
    <main className={classes.container}>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleCancel}>Cancel</button>
    </main>
  )
}

export default NavButtons