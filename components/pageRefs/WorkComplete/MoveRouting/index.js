import { useRouter } from 'next/router'
import ManifestButton from '../../../utilities/ManifestButton'

import classes from './styles.module.scss'

const MoveRouting = () => {
  const router = useRouter()

  const handleOk = () => {
    router.push('/liveManifest')
  }

  return (
    <main className={classes.container}>
      {null && <button onClick={handleOk} className={classes.okButton}>OK</button>}
      {
        <div className={classes.getContainer}>
          <h2>Your current assignment appears to be<br/>complete.</h2>
          <ManifestButton title={'Get My Assignment'} />
        </div>
      }
    </main>
  )
}

export default MoveRouting