import LogoutButton from 'components/utilities/LogoutButton'
import ManifestButton from 'components/utilities/ManifestButton'

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
