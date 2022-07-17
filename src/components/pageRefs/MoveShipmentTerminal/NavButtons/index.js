import { useRouter } from 'next/router'
import LiveGreenSheetButton from 'components/utilities/LiveGreenSheetButton'
import ManualProButton from 'components/utilities/ManualProButton'

import classes from './styles.module.scss'

const NavButtons = () => {
  const router = useRouter()

  // send to shipmentDetails
  const handleReweigh = () => {
    router.push('/shipmentDetails')
  }

  const handleDimension = () => {
    // Disabled - Requires equipment
  }

  return (
    <main className={classes.container}>
      <LiveGreenSheetButton title={'LIVE GREEN SHEET'} />
      <ManualProButton title={'MANUAL PRO ENTRY'}/>
      <button onClick={handleReweigh}>REWEIGH</button>
      <button
      style={{ backgroundColor: 'gray', color: 'lightgray', border: '1px' }}
      onClick={handleDimension}
      >
      </button>
    </main>
  )
}

export default NavButtons
