import { useRouter } from 'next/router'

const LiveGreenSheetButton = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/liveManifest')
  }

  return (
    <button onClick={handleClick}>Live Green Sheet</button>
  )
}

export default LiveGreenSheetButton