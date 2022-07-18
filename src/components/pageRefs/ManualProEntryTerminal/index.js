import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import CurrentProContext from 'contexts/CurrentProContext'
import PreviousProContext from 'contexts/PreviousProContext'
import Keys from 'components/utilities/KeyPad/Keys'
import useFetchInput from 'hooks/useFetchInput'

import classes from './styles.module.scss'

const ManualProEntryTerminal = () => {
  const router = useRouter()
  const { setPreviousProData } = useContext(PreviousProContext)
  const { setCurrentPro } = useContext(CurrentProContext)
  const [
    inputValue,
    handleChange,
    handleEnter,
    setInputValue,
    data
  ] = useFetchInput('', 'api/DatabaseApi/freight/')

  // Contexts when data changes
  useEffect(() => {
    if (data) {
      setCurrentPro(data)
      setPreviousProData(prevData => [...prevData, data])
      router.push('/shipmentDetails')
    }
  }, [data, setPreviousProData, setCurrentPro, router])

  // Keyboard enter pressed
  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleEnter()
    }
  }

  return (
  <main className={classes.keypadBox}>
    <h1>Please enter a pro number</h1>
    <div className={classes.inputContainer}>
      <h2>Pro Number:</h2>
      <input value={inputValue} onChange={handleChange} onKeyUp={handleKeyUp} />
    </div>
      <Keys
      classes={classes}
      inputValue={inputValue}
      setInputValue={setInputValue}
      onEnter={handleEnter}
      />
  </main>
  )
}

export default ManualProEntryTerminal
