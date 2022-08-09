import classes from './styles.module.scss'

const ManifestHeader = () => {
  return (
    <main className={classes.container}>
      <div className={classes.timeTable}>
        <p>🔥: &lt; 1hr</p>
        <p>🔥: 1~2 hrs</p>
        <p>🔥: 2~3 hr</p>
        <p>🔥: &gt; 3 hrs</p>
      </div>
      <div className={classes.infoContainer}>
      <h2>LIVE MANIFEST</h2>
      <p>Trailer: N/A / Door: N/A / Assigned to: John Johnson</p>
      </div>
    </main>
  )
}

export default ManifestHeader
