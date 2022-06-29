import { useRouter } from "next/router"

const PreviousProButton = ({ title }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/previousPro')
  }

  return (
    <button onClick={handleClick}>Previous Pro</button>
  )
}

export default PreviousProButton