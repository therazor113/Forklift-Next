import Layout from '../components/core/Layout'
import PreviousProTerminal from '../components/pageRefs/PreviousProTerminal'

const previousPro = () => {

  return (
    <Layout 
    titleID={'Previous Pro List:'}
    style={{backgroundColor: 'rgb(25, 25, 200)', color: 'white'}}
    >
      <PreviousProTerminal />
    </Layout>
  )
}

export default previousPro