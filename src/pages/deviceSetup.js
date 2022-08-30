import Layout from 'components/core/Layout'
import DeviceSetupTerminal from 'components/pageRefs/DeviceSetup/DeviceSetupTerminal'

const deviceSetup = () => {
  return (
    <Layout titleID={'Device Setup:'}>
      <DeviceSetupTerminal />
    </Layout>
  )
}

export default deviceSetup
