import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import HeaderComponent from '../HeaderComponent'

import classes from './styles.module.scss'

const Layout = ({ children, titleID, titleExtra, style }) => {
  return (
    <div style={style} className={classes.container}>
      <HeadComponent />
      <HeaderComponent style={style} titleID={titleID} titleExtra={titleExtra}/>
      <main className={classes.main}>
        {children}
      </main>
      <FooterComponent />
    </div>
  )
}

export default Layout