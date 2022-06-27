import Layout from '../components/core/Layout'
import EditInformation from '../components/pageRefs/DeviceSetup/EditInformation'
import NavButtons from '../components/pageRefs/DeviceSetup/NavButtons'
import SelectButtons from '../components/pageRefs/DeviceSetup/SelectButtons'

import classes from '../styles/deviceSetup.module.scss'

const deviceSetup = () => {
  return (
    <Layout 
    titleID={'Device Setup:'}
    style={{backgroundColor: 'rgb(25, 25, 200)'}}
    >
      <main className={classes.container}>
        <div className={classes.editContainer}>
          <EditInformation />
          <SelectButtons />
        </div>
          <NavButtons />
      </main>
    </Layout>
  )
}

export default deviceSetup