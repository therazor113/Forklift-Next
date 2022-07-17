import { useContext, useEffect, useState, useRef } from 'react'
import CurrentProContext from '../../../context/CurrentProContext'

import classes from './styles.module.scss'

const LiveStats = () => {
  const { currentPro } = useContext(CurrentProContext)
  const [ loadedData, setLoadedData ] = useState()
  const loadedTrailer = useRef(() => {})
  
  useEffect(() => {
    loadedTrailer.current()
  }, [])
  
  loadedTrailer.current = () => {
    fetch(`/api/loadedApi/[locations]/${currentPro.loaded}`)
    .then(res => res.json())
    .then(json => setLoadedData(json))
    .catch(err => console.log(err))
  }
  
  return (
    <main className={classes.container}>
      <h2 className={classes.proInfo}>
        PRO: {currentPro.proNumber}<br/> 
        {currentPro.loaded && `NOW LOADED IN DOOR ${currentPro.loaded} ON TRAILER ${loadedData?.number}`}
        {currentPro.docked && `SCANNED AND DOCKED IN BAY ${currentPro.docked}`}
      </h2>
      <div className={classes.stats}>
        <h1>LIVE STATISTICS</h1>
        <h2>
          DOCKED CREDITS: 0<br/>
          LOADED CREDITS: 0<br/>
          SCANNED CRADITS: 0
        </h2>
      </div>
      <h3>
        {!loadedData && <br/>}
        {loadedData && 
        `${loadedData.number} - 
        Bill Count: ${loadedData.billCount} 
        Total Weight: ${loadedData.weight} 
        Total Pieces: ${loadedData.pieces}`}
      </h3>
    </main>
  )
}

export default LiveStats