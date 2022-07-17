import Layout from 'components/core/Layout'
import LiveGreenSheetTerminal from 'components/pageRefs/LiveGreenSheet'

const liveGreenSheet = () => {
  return (
    <Layout
      titleID={'Live Green Sheet'}
      style={{ backgroundColor: 'white', color: 'black' }}
    >
      <LiveGreenSheetTerminal />
    </Layout>
  )
}

export default liveGreenSheet
