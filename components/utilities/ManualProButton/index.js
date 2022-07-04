import { useRouter } from "next/router"

const ManualProButton = ({ title }) => {
  const router = useRouter()
  
  return (
    <button onClick={() => router.push('/manualProEntry')}>{title}</button>
  )
}

export default ManualProButton