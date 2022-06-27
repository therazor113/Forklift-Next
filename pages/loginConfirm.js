import Layout from "../components/core/Layout"
import ConfirmName from "../components/utilities/Confirm/ConfirmName"
import ConfirmButtons from "../components/utilities/Confirm/ConfirmButtons"

const Confirm = () => {
  return (
    <Layout titleID='Login Confirmation:'>
      <ConfirmName />
      <ConfirmButtons />
    </Layout>
  )
}

export default Confirm