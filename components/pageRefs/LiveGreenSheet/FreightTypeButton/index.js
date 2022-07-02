import { useState } from 'react'

import classes from './styles.module.scss'

const FreightTypeButton = () => {
  const [type, setType] = useState('ALL')

  const handleClick = () => {
    setType(type == 'ALL' ? 'DOCK' : 'ALL')
  }
  return (
    <main className={classes.container}>
      <h2>Freight:</h2>
      <button onClick={handleClick}>{type}</button>
    </main>
  )
}

export default FreightTypeButton