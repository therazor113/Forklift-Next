import { useContext } from 'react'
import Link from 'next/link'
import Layout from "../components/core/Layout"
import UserContext from '../components/context/UserContext/UserContext'

const Confirm = () => {

  const { userData } = useContext(UserContext)

  return (
    <Layout>
      <h2>{userData.first} {userData.last}</h2>
      <Link href='/'>
        <a>Back</a>
      </Link>
    </Layout>
  )
}

export default Confirm