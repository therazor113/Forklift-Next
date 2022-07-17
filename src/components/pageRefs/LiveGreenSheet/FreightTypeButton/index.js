import { useState } from 'react'

import classes from './styles.module.scss'

const FreightTypeButton = () => {
  const [type, setType] = useState(true)

  return (
    <main className={classes.container}>
      <h2>Freight:</h2>
      <button onClick={() => setType(!type)}>{type ? 'ALL' : 'DOCK'}</button>
    </main>
  )
}

export default FreightTypeButton
