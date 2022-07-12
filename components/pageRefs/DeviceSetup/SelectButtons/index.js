import { useEffect, useState, useRef } from 'react'
import classes from './styles.module.scss'

const SelectButtons = ({ submit }) => {
  const initialNetwork = typeof window !== 'undefined' ? localStorage.getItem('network') : 0
  const initialType = typeof window !== 'undefined' ? localStorage.getItem('type') : 0
  const [network, setNetwork] = useState(initialNetwork)
  const [type, setType] = useState(initialType)
  const setLocalStorage = useRef(() => {})

  useEffect(() => {
    setLocalStorage.current()
  }, [submit])

  setLocalStorage.current = () => {
    localStorage.setItem('network', network)
    localStorage.setItem('type', type)
  }

  return (
    <main className={classes.container}>
      <h2>Type</h2>
      <div>
        <input onChange={() => setType(1)} type='radio' name='type' checked={type == 1} />
        <button>Reweigh</button>
      </div>
      <div>
        <input onChange={() => setType(2)} type='radio' name='type' checked={type == 2} />
        <button>DMS</button>
      </div>
      <div>
        <input onChange={() => setType(3)} type='radio' name='type' checked={type == 3} />
        <button>Both</button>
      </div>
      <h2>Network</h2>
      <div>
        <input onChange={() => setNetwork(1)} type='radio' name='network' checked={network == 1} />
        <button>Wifi</button>
      </div>
      <div>
        <input onChange={() => setNetwork(2)} type='radio' name='network' checked={network == 2} />
        <button>Cellular</button>
      </div>
      <div>
        <input onChange={() => setNetwork(3)} type='radio' name='network' checked={network == 3} />
        <button>Auto</button>
      </div>
    </main>
  )
}

export default SelectButtons