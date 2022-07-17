import { useContext } from 'react'
import { useRouter } from 'next/router'
import WeightContext from 'contexts/WeightContext'
import CurrentProContext from 'contexts/CurrentProContext'
import PreviousProContext from 'contexts/PreviousProContext'
import CurrentTrailerContext from 'contexts/CurrentTrailerContext'

const LogoutButton = ({ title }) => {
  const { setWeightData } = useContext(WeightContext)
  const { setCurrentPro } = useContext(CurrentProContext)
  const { setPreviousProData } = useContext(PreviousProContext)
  const { setTrailerData } = useContext(CurrentTrailerContext)
  const router = useRouter()

  // Resets Contexts && Sends to login
  const handleClick = () => {
    setWeightData(3000)
    setCurrentPro([])
    setPreviousProData([])
    setTrailerData([])
    router.push('/')
  }
  return (
    <button onClick={handleClick}>{title}</button>
  )
}

export default LogoutButton
