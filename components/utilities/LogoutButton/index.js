import { useRouter } from "next/router"

const LogoutButton = ({ classes, title }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }
  return (
    <button onClick={handleClick}>{title}</button>
  )
}

export default LogoutButton