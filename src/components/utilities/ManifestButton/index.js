import { useRouter } from 'next/router'

const ManifestButton = ({ title }) => {
  const router = useRouter()

  // Sends to liveManifest if available
  const handleClick = () => {
    router.push('/liveManifest')
  }

  return (
    <button onClick={handleClick}>{title}</button>
  )
}

export default ManifestButton
