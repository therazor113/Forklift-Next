import { useRouter } from 'next/router'
import CancelButton from 'components/utilities/CancelButton'
import ManifestHeader from './ManifestHeader'
import PageNav from './PageNav'

import classes from './styles.module.scss'

const LiveManifest = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/getWork')
  }

  return (
    <main className={classes.container}>
      <ManifestHeader />
      <div className={classes.list}>
        <div className={classes.listTitles}>
        <button>PRO #</button>
        <button>CUSTOMER</button>
        <button>SHIPPER</button>
        <button>HU/WT</button>
        <button>SVC</button>
        <button>NLOC</button>
        <button>FLAGS</button>
        <button>LOC</button>
        </div>
        {/* showRecords && */ <h1 className={classes.noRecords}>No Records Found</h1>}
      </div>
      <div className={classes.nav}>
        <div className={classes.route}>
          <button onClick={handleClick}>Nav</button>
          <CancelButton />
        </div>
        <PageNav />
      </div>
    </main>
  )
}

export default LiveManifest
