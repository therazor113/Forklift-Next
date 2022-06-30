import LogoutButton from '../../../utilities/LogoutButton'
import ManifestButton from '../../../utilities/ManifestButton'

import classes from './styles.module.scss'

const HeaderButtons = () => {
  return (
    <main className={classes.container}>
      <LogoutButton title={'LOG OFF'} />
      <ManifestButton title={'UNLOAD MANIFEST'} />
    </main>
  )
}

export default HeaderButtons