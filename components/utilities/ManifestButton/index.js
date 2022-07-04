import { useRouter } from "next/router"

const ManifestButton = ({ title }) => {
  const router = useRouter()

// Send to liveManifest if available
  const handleClick = () => {
    // if (CurrentManifestContext == []) return
    // else {router.push('/workManifest')}
    router.push('/liveManifest')
  }

  return (
    <button onClick={handleClick}>{title}</button>
  )
}

export default ManifestButton