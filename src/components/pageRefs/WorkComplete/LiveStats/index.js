import { useContext, useEffect, useState, useRef } from 'react'
import CurrentProContext from 'contexts/CurrentProContext'

import classes from './styles.module.scss'

const LiveStats = () => {
  const { currentPro } = useContext(CurrentProContext)
  const [loadedData, setLoadedData] = useState()
  const loadedTrailer = useRef(() => {})

  useEffect(() => {
    if (!currentPro.loaded) return
    loadedTrailer.current()
  }, [currentPro])

  loadedTrailer.current = () => {
    fetch(`api/DatabaseApi/trailers/location/${currentPro.loaded}`)
      .then(res => res.json())
      .then(json => setLoadedData(json))
      .catch(err => console.log(err))
  }

  return (
    <main className={classes.container}>
      <h2 className={classes.proinfo}>
        PRO: {currentPro.pronumber}<br/>
        {currentPro.loaded && `NOW LOADED IN DOOR ${currentPro.loaded} ON TRAILER ${currentPro.ontrailer}`}
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
        {currentPro.loaded &&
        `${loadedData?.trailerid} - 
        Bill Count: ${loadedData?.billcount} 
        Total Weight: ${loadedData?.totalweight} 
        Total Pieces: ${loadedData?.pieces}`}
      </h3>
    </main>
  )
}

export default LiveStats
