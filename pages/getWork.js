import Layout from '../components/core/Layout'
import WorkName from '../components/pageRefs/GetWorkTerminal/WorkName'


const getWork = () => {
  return (
    <Layout 
    style={{backgroundColor: 'white', color: 'black'}}
    >
      <WorkName />
    </Layout>
  )
}

export default getWork