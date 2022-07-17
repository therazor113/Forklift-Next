import Layout from "../components/core/Layout"
import LiveStats from "../components/pageRefs/WorkComplete/LiveStats"
import MoveRouting from "../components/pageRefs/WorkComplete/MoveRouting"
import Exceptions from "../components/pageRefs/WorkComplete/Exceptions"

import classes from '../styles/moveConfirmation.module.scss'

const workComplete = () => {
  return (
    <Layout titleID={'Move Confirmation:'} style={{backgroundColor: 'white', color: 'black'}}>
      <main className={classes.container}>
        <div className={classes.info}>
          <LiveStats />
          <Exceptions />
        </div>
        <MoveRouting />
      </main>
    </Layout>
  )
}

export default workComplete