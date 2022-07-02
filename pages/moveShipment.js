import Layout from '../components/core/Layout'
import HeaderButtons from '../components/pageRefs/MoveShipmentTerminal/HeaderButtons'
import ActionButtons from '../components/pageRefs/MoveShipmentTerminal/ActionButtons'
import ProInformation from '../components/pageRefs/MoveShipmentTerminal/ProInformation'
import NavButtons from '../components/pageRefs/MoveShipmentTerminal/NavButtons'

import classes from '../styles/moveShipment.module.scss'

const moveShipment = () => {
  return (
    <Layout
    titleID={'Move Shipment:'}
    style={{backgroundColor: 'white', color: 'black', display: 'grid', padding: '0.5rem', height: '100px'}}
    style2={{display: 'flex', gap: '0.6rem', justifyContent: 'start', width:'450px'}}
    >
      <HeaderButtons />
      <main className={classes.container}>
        <ProInformation />
      <div className={classes.actions}>
        <ActionButtons />
        <NavButtons />
      </div>
      </main>
    </Layout>
  )
}

export default moveShipment