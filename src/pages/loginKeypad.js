import Layout from 'components/core/Layout'
import LoginKeypad from 'components/pageRefs/LoginKeypad'

const Home = () => {
  return (
    <Layout
      titleID={'Login:'}
      titleExtra={'Build#: 000000-0000P'}
    >
    <LoginKeypad />
    </Layout>
  )
}

export default Home
