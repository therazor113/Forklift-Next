import { useContext } from 'react'
import CurrentProContext from '../../context/CurrentProContext'

const ProDetailsData = () => {
  const { currentPro } = useContext(CurrentProContext)
  return (
    <pre>{JSON.stringify(currentPro, null, 2)}</pre>
  )
}

export default ProDetailsData