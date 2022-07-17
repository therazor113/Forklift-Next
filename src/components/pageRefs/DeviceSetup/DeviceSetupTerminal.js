import { useRouter } from 'next/router'
import { useState } from 'react'
import EditInformation from './EditInformation'
import SelectButtons from './SelectButtons'
import CancelButton from 'components/utilities/CancelButton'

import classes from './styles.module.scss'

const DeviceSetupTerminal = () => {
  const [submit, setSubmit] = useState(false)
  const [edit, setEdit] = useState(false)
  const router = useRouter()

  const handleEdit = () => {
    setEdit(!edit)
  }

  const handleSubmit = () => {
    setSubmit(true)
    router.push('/loginSurvey')
  }

  return (
    <main className={classes.container}>
      <div className={classes.editContainer}>
        <EditInformation submit={submit} edit={edit} />
        <SelectButtons submit={submit} />
      </div>
      <div className={classes.nav}>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleSubmit}>Submit</button>
        <CancelButton />
      </div>
    </main>
  )
}

export default DeviceSetupTerminal
