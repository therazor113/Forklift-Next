import { useRouter } from "next/router"
import LiveGreenSheetButton from "../../../utilities/LiveGreenSheetButton"
import ManualProButton from "../../../utilities/ManualProButton"

import classes from './styles.module.scss'

const NavButtons = () => {
  const router = useRouter()

  const handleReweigh = () => {
    router.push('/shipmentDetails')
  }

  const handleDimension = () => {
    // Disabled - Requires outside programs
  }

  return (
    <main className={classes.container}>
      <LiveGreenSheetButton title={'LIVE GREEN SHEET'} />
      <ManualProButton title={'MANUAL PRO ENTRY'}/>
      <button onClick={handleReweigh}>REWEIGH</button>
      <button
      style={{backgroundColor: 'gray', color: 'lightgray', border: '1px'}} 
      onClick={handleDimension}
      >
      </button>
    </main>
  )
}

export default NavButtons