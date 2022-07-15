import { useContext } from 'react'
import CurrentTrailerContext from '../../context/CurrentTrailerContext'

const WorkCompleteTerminal = () => {
  const { trailerData, setTrailerData } = useContext(CurrentTrailerContext)

  const handleClick = () => {
    fetch(`api/TrailerApi/[trailersID]/4321$`)
    .then(res => res.json())
    .then(json => setTrailerData(json))
    .catch(err => console.log(err))
  }

  return (
    <main>
      <button onClick={handleClick}>Test</button>
      <pre>{JSON.stringify(trailerData, null, 2)}</pre>
    </main>
  )
}

export default WorkCompleteTerminal