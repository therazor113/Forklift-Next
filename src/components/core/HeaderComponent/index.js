import LiveClock from './HeaderItems/LiveClock'
import classes from './styles.module.scss'

const HeaderComponent = ({ titleID, titleExtra, style, style2 }) => {
  return (
    <header style={style} className={classes.container}>
        <div>
          <h2>{titleID}</h2>
          <p className={classes.extra}>{titleExtra}</p>
        </div>
        <h2>[DEV]</h2>
        <div style={style2} className={classes.clock}>
          <LiveClock />
        </div>
    </header>
  )
}

export default HeaderComponent
