import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import HeaderComponent from '../HeaderComponent'

import classes from './styles.module.scss'

const Layout = ({ children, titleID, titleExtra }) => {
  return (
    <div className={classes.container}>
      <HeadComponent />
      <HeaderComponent titleID={titleID} titleExtra={titleExtra}/>
      <main className={classes.main}>
        {children}
      </main>
      <FooterComponent />
    </div>
  )
}

export default Layout