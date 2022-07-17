import { useContext } from 'react'
import CurrentProContext from 'contexts/CurrentProContext'

const ProDetailsData = () => {
  const { currentPro } = useContext(CurrentProContext)

  return (
    <pre>{JSON.stringify(currentPro, null, 2)}</pre>
  )
}

export default ProDetailsData
