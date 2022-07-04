import { useContext } from "react"
import { useRouter } from "next/router"
import CurrentProContext from "../../../context/CurrentProContext"

const PreviousProRoutes = ({ title, prevPro }) => {
  const { setCurrentPro } = useContext(CurrentProContext)
  const router = useRouter()

// set currentPro to pro clicked && send to shipmentDetails
  const handleClick = () => {
    setCurrentPro(prevPro)
    router.push('/shipmentDetails')
  }

  return (
    <button onClick={handleClick}>{title}</button>
  )
}

export default PreviousProRoutes