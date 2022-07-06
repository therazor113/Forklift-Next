import Layout from '../components/core/Layout'
import ConfirmName from '../components/pageRefs/LoginConfirm/ConfirmName'
import ConfirmButtons from '../components/pageRefs/LoginConfirm/ConfirmButtons'

const Confirm = () => {
  return (
    <Layout 
    titleID={'Login Confirmation:'} 
    style={{backgroundColor: 'rgb(25, 50, 200)'}}
    >
      <ConfirmName />
      <ConfirmButtons />
    </Layout>
  )
}

export default Confirm