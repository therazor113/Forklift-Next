import Layout from '../components/core/Layout'
import ProDetailsData from '../components/pageRefs/ProDetailsDisplay'
import CancelButton from '../components/utilities/CancelButton'

const proDetails = () => {

  return (
    <Layout 
    titleID={'Pro Details:'}
    style2={{visibility: 'hidden'}}
    style={{backgroundColor: 'white', color: 'black'}}
    >
      <ProDetailsData />
      <CancelButton />
    </Layout>
  )
}

export default proDetails