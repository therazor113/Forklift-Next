import { useRouter } from 'next/router'

const LiveGreenSheetButton = ({ title }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/liveGreenSheet')
  }

  return (
    <button onClick={handleClick}>{title}</button>
  )
}

export default LiveGreenSheetButton