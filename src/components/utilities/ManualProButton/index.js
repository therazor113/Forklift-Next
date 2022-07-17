import { useRouter } from 'next/router'

// Sends to manualProEntry
const ManualProButton = ({ title }) => {
  const router = useRouter()

  return (
    <button onClick={() => router.push('/manualProEntry')}>{title}</button>
  )
}

export default ManualProButton
