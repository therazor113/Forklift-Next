import { UserProvider } from "../UserContext"
import { WeightProvider } from "../WeightContext"
import { CurrentProProvider } from "../CurrentProContext"
import { PreviousProProvider } from "../PreviousProContext"
import { CurrentTrailerProvider } from "../CurrentTrailerContext"

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