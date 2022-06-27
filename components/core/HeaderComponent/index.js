import LiveClock from './HeaderItems/LiveClock'
import classes from './styles.module.scss'

const HeaderComponent = ({ titleID, titleExtra, style }) => {
  return (
    <header style={style} className={classes.container}>
        <div className={classes.title}>
          <h2>{titleID}</h2>
          <p className={classes.extra}>{titleExtra}</p>
        </div>
        <h2>[NULL]</h2>
        <LiveClock />
    </header>
  )
}

export default HeaderComponent