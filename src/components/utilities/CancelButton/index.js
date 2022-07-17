import { useRouter } from 'next/router'

const CancelButton = ({ navPage }) => {
  const router = useRouter()

  const handleCancel = () => {
    // Sends to nav page
    if (navPage) {
      router.push('/getWork')
    } else {
      history.back()
    }
  }
  return (
    <button onClick={handleCancel}>Cancel</button>
  )
}

export default CancelButton
