import { useRouter } from 'next/router'

// Sends to liveGreenSheet
const LiveGreenSheetButton = ({ title }) => {
  const router = useRouter()
  return (
    <button onClick={() => router.push('/liveGreenSheet')}>{title}</button>
  )
}

export default LiveGreenSheetButton
