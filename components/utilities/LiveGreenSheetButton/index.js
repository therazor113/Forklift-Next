import { useRouter } from 'next/router'

const LiveGreenSheetButton = ({ title }) => {
  const router = useRouter()
  
  return (
    <button onClick={() => router.push('/liveGreenSheet')}>{title}</button>
  )
}

export default LiveGreenSheetButton