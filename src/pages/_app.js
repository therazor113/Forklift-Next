import Providers from 'contexts/Providers'
import NextNProgress from 'nextjs-progressbar'
import 'styles/globals.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
  <Providers>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={false}
        options={{ showSpinner: false }}
      />
    <Component {...pageProps} />
  </Providers>
  )
}

export default MyApp
