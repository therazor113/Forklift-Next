import { useRouter } from "next/router"

const LogoutButton = ({ classes }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }
  return (
    <button className={classes.logout} onClick={handleClick}>Logout</button>
  )
}

export default LogoutButton