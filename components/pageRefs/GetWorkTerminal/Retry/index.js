import { useRouter } from "next/router"

const Retry = () => {
  const router = useRouter()

  const handleRetry = () => {
    router.push('/workManifest') // temp
  }

  return (
    <button onClick={handleRetry}>RETRY</button>
  )
}

export default Retry