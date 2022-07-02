import Providers from '../components/context/Providers'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
  <Providers>
    <Component {...pageProps} />
  </Providers>
  )
}


export default MyApp
