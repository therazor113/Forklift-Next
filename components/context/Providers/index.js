import { UserProvider } from "../UserContext"
import { WeightProvider } from "../WeightContext"
import { CurrentProProvider } from "../CurrentProContext"

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <WeightProvider>
        <CurrentProProvider>
          {children}
        </CurrentProProvider>
      </WeightProvider>
    </UserProvider>
  )
}

export default Providers