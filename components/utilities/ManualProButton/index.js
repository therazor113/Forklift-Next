import { useRouter } from "next/router"

const ManualProButton = ({ title }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/manualProEntry')
  }

  return (
    <button onClick={handleClick}>{title}</button>
  )
}

export default ManualProButton