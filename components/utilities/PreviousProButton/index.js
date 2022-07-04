import { useRouter } from "next/router"

// Sends to previousPro
const PreviousProButton = () => {
  const router = useRouter()

  return (
    <button onClick={() => router.push('/previousPro')}>Previous Pro</button>
  )
}

export default PreviousProButton