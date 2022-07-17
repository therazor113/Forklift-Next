import { UserProvider } from 'contexts/UserContext'
import { WeightProvider } from 'contexts/WeightContext'
import { CurrentProProvider } from 'contexts/CurrentProContext'
import { PreviousProProvider } from 'contexts/PreviousProContext'
import { CurrentTrailerProvider } from 'contexts/CurrentTrailerContext'

const Providers = ({ children }) => {
  return (
    <CurrentTrailerProvider>
      <PreviousProProvider>
        <UserProvider>
          <WeightProvider>
            <CurrentProProvider>
              {children}
            </CurrentProProvider>
          </WeightProvider>
        </UserProvider>
      </PreviousProProvider>
    </CurrentTrailerProvider>
  )
}

export default Providers
