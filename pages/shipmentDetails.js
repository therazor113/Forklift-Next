import Layout from '../components/core/Layout'
import ProContainer from '../components/pageRefs/ShipmentDetailsTerminal/ProContainer'
import ProInformation from '../components/pageRefs/ShipmentDetailsTerminal/ProInformation'
import WeightCapture from '../components/pageRefs/ShipmentDetailsTerminal/WeightCapture'

import classes from '../styles/shipmentDetails.module.scss'

const shipmentDetails = () => {
  return (
    <Layout titleID={'Shipment Details'} style={{backgroundColor: 'rgb(25, 25, 200)'}}>
      <main className={classes.container}>
        <div className={classes.leftContainer}>
        <ProInformation />
        <WeightCapture />
        </div>
        <div className={classes.rightContainer}>
        <ProContainer />
        
        </div>
      </main>
    </Layout>
  )
}

export default shipmentDetails