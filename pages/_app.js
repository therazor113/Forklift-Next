import { UserProvider } from '../components/context/UserContext/UserContext'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
  <UserProvider>
    <Component {...pageProps} />
  </UserProvider>
  )
}


export default MyApp
