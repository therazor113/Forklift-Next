import Layout from 'components/core/Layout'
import LoginKeypad from 'components/pageRefs/LoginKeypad'

const Home = () => {
  return (
    <Layout
      titleID={'Login:'}
      titleExtra={'Build#: 000000-0000P'}
      style={{ backgroundColor: 'rgb(25, 50, 200)' }}
    >
    <LoginKeypad />
    </Layout>
  )
}

export default Home
