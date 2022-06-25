import Link from 'next/link'
import Layout from '../components/core/Layout'
import UserData from '../components/utilities/UserData'

const Home = () => {
  return (
			<Layout>
				<UserData />
				<Link href='/confirm'>
					<a>Confirm Page</a>
				</Link>
			</Layout>
  )
}

export default Home