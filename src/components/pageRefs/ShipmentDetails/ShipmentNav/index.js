import { useRouter } from 'next/router'
import LogoutButton from 'components/utilities/LogoutButton'
import ZeroScale from 'components/utilities/ZeroScale'

import classes from './styles.module.scss'

const ShipmentNav = () => {
  const router = useRouter()

  // Send to moveShipment
  const handleClick = () => {
    router.push('/moveShipment')
  }

  return (
    <main className={classes.container}>
      <ZeroScale />
      <button style={{ backgroundColor: 'lightgray' }} onClick={handleClick}>DMS</button>
      <LogoutButton title={'Logout'}/>
    </main>
  )
}

export default ShipmentNav
