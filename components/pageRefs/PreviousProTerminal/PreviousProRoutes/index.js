import { useContext } from "react"
import { useRouter } from "next/router"
import CurrentProContext from "../../../context/CurrentProContext"

const PreviousProRoutes = ({ title, proRoute }) => {
  const { setCurrentPro } = useContext(CurrentProContext)
  const router = useRouter()

  const handleClick = () => {
    setCurrentPro(proRoute)
    router.push('/shipmentDetails')
  }

  return (
    <button onClick={handleClick}>{title}</button>
  )
}

export default PreviousProRoutes