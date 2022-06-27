import { UserProvider } from '../components/context/UserContext'
import { WeightProvider } from '../components/context/WeightContext'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <WeightProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </WeightProvider>
  )
}


export default MyApp
