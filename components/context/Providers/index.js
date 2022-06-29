import { UserProvider } from "../UserContext"
import { WeightProvider } from "../WeightContext"
import { CurrentProProvider } from "../CurrentProContext"
import { PreviousProProvider } from "../PreviousProContext"

const Providers = ({ children }) => {
  return (
    <PreviousProProvider>
      <UserProvider>
        <WeightProvider>
          <CurrentProProvider>
            {children}
          </CurrentProProvider>
        </WeightProvider>
      </UserProvider>
    </PreviousProProvider>
  )
}

export default Providers