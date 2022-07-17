import CancelButton from 'components/utilities/CancelButton'
import DestInput from './DestInput'
import DoorInput from './DoorInput'
import PageNav from './PageNav'
import SearchButton from './SearchButton'
import FreightTypeButton from './FreightTypeButton'

import classes from './styles.module.scss'

const LiveGreenSheetTerminal = () => {
  return (
    <main className={classes.container}>
      <div className={classes.search}>
        <DestInput />
        <DoorInput />
        <FreightTypeButton />
        <SearchButton />

      </div>
      <div className={classes.list}>
        <button>PRO #</button>
        <button>LOCATION</button>
        <button>PIECES</button>
        <button>WEIGHT</button>
        <button>DEST</button>
        <button>DELV</button>
        <button>SRV</button>
        <button>FLAGS</button>
      </div>
      <div className={classes.nav}>
        <CancelButton />
        <PageNav />
      </div>
    </main>
  )
}

export default LiveGreenSheetTerminal
