import { createContext, useState } from "react";

const UserContext = createContext()

export function UserProvider({ children }) {
  const [userData, setUserData] = useState([])

  const userLogin = (data) => {
    setUserData(data)
  }

  return (
    <UserContext.Provider value={{ userData, userLogin }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext