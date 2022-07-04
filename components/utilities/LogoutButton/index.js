import { useContext } from "react"
import { useRouter } from "next/router"
import WeightContext from '../../context/WeightContext'
import CurrentProContext from '../../context/CurrentProContext'
import PreviousProContext from '../../context/PreviousProContext'

const LogoutButton = ({ title }) => {
  const { setWeightData } = useContext(WeightContext)
  const { setCurrentPro } = useContext(CurrentProContext)
  const { setPreviousProData } = useContext(PreviousProContext)
  const router = useRouter()

// Resets Contexts && Sends to login
  const handleClick = () => {
    setWeightData(3000)
    setCurrentPro([])
    setPreviousProData([])
    router.push('/')
  }
  return (
    <button onClick={handleClick}>{title}</button>
  )
}

export default LogoutButton