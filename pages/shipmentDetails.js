import Layout from '../components/core/Layout'
import ProContainer from '../components/pageRefs/ShipmentDetailsTerminal/ProContainer'
import ProInformation from '../components/pageRefs/ShipmentDetailsTerminal/ProInformation'

const shipmentDetails = () => {
  return (
    <Layout style={{backgroundColor: 'rgb(25, 25, 200)'}}>
      <main>
        <ProInformation />
        <ProContainer />
      </main>
    </Layout>
  )
}

export default shipmentDetails