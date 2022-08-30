import Layout from 'components/core/Layout'
import CapturedWeights from 'components/pageRefs/ShipmentDetails/CapturedWeights'
import ProContainer from 'components/pageRefs/ShipmentDetails/ProContainer'
import ProInformation from 'components/pageRefs/ShipmentDetails/ProInformation'
import WeightCapture from 'components/pageRefs/ShipmentDetails/WeightCapture'
import ShipmentNav from 'components/pageRefs/ShipmentDetails/ShipmentNav'
import { WeightCaptureProvider } from 'contexts/WeightCaptureContext'

import classes from 'styles/shipmentDetails.module.scss'

const shipmentDetails = () => {
  return (
    <Layout titleID={'Shipment Details'}>
      <WeightCaptureProvider>
        <main className={classes.container}>
          <div className={classes.leftContainer}>
            <ProInformation />
            <br />
            <WeightCapture />
          </div>
          <div className={classes.rightContainer}>
            <ProContainer />
            <CapturedWeights />
            <ShipmentNav />
          </div>
        </main>
      </WeightCaptureProvider>
    </Layout>
  )
}

export default shipmentDetails
