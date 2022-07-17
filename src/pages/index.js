import Layout from 'components/core/Layout'
import IndexTerminal from 'components/pageRefs/IndexTerminal'

const Home = () => {
  return (
  <Layout
    titleID={'Login:'}
    titleExtra={'Build#: 000000-0000P'}
    style={{ backgroundColor: 'rgb(25, 50, 200)' }}
  >
  <IndexTerminal />
  </Layout>
  )
}

export default Home
