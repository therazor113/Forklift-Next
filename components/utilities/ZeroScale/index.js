import { useContext } from 'react'
import WeightContext from '../../context/WeightContext'

const ZeroScale = () => {
  const { setWeightData } = useContext(WeightContext)

  const handleClick = () => {
    setWeightData(0)
  }
  return (
    <button onClick={handleClick}>Zero Scale</button>
  )
}

export default ZeroScale