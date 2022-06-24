import UserContext from "../../../pages/UserContext"
import { useContext } from "react"

const UserData = ({ onClick, input }) => {

  const {userData, userLogin} = useContext(UserContext)


  const handleClick = async () => {
    try {
      const response = await fetch(`api/NamesApi/${input}`)
      const data = await response.json()

      onClick(data)
      userLogin(data)
    } catch {
      console.log('error')
    }
  }

  return (
    <>
      <h2>{userData.id} {userData.first} {userData.last}</h2>
      <button onClick={handleClick}>Data</button>
    </>
  )
}

export default UserData