import Layout from "../components/core/Layout"
import LiveStats from "../components/pageRefs/WorkComplete/LiveStats"

const workComplete = () => {
  return (
    <Layout titleID={'Move Confirmation:'} style={{backgroundColor: 'white', color: 'black'}}>
      <LiveStats />
    </Layout>
  )
}

export default workComplete