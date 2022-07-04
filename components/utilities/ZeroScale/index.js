import { useContext } from 'react'
import WeightContext from '../../context/WeightContext'

const ZeroScale = () => {
  const { setWeightData } = useContext(WeightContext)

  return (
    <button onClick={() => setWeightData(0)}>Zero Scale</button>
  )
}

export default ZeroScale