import { useContext } from 'react'
import CurrentProContext from '../../../context/CurrentProContext'
import ManualProButton from '../../../utilities/ManualProButton'

const ProContainer = () => {
  const {currentPro} = useContext(CurrentProContext)
  return (
    <main>
      <h2>{currentPro.proNumber}</h2>
      <ManualProButton />
    </main>
  )
}

export default ProContainer