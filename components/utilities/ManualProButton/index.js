import { useRouter } from "next/router"

const ManualProButton = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/manualProEntry')
  }

  return (
    <button onClick={handleClick}>MANUAL PRO ENTRY</button>
  )
}

export default ManualProButton