import Layout from 'components/core/Layout'
import GetWorkTerminal from 'components/pageRefs/GetWorkTerminal'

const getWork = () => {
  return (
    <Layout style={{ backgroundColor: 'white', color: 'black' }}>
      <GetWorkTerminal />
    </Layout>
  )
}

export default getWork
