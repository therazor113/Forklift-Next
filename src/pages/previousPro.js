import Layout from 'components/core/Layout'
import PreviousProTerminal from 'components/pageRefs/PreviousProTerminal'

const previousPro = () => {
  return (
    <Layout
      titleID={'Previous Pro List:'}
      style={{ color: 'white' }}
    >
      <PreviousProTerminal />
    </Layout>
  )
}

export default previousPro
