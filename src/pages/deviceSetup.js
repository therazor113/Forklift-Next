import Layout from 'components/core/Layout'
import DeviceSetupTerminal from 'components/pageRefs/DeviceSetup/DeviceSetupTerminal'

const deviceSetup = () => {
  return (
    <Layout
      titleID={'Device Setup:'}
      style={{ backgroundColor: 'rgb(25, 50, 200)' }}
    >
      <DeviceSetupTerminal />
    </Layout>
  )
}

export default deviceSetup
