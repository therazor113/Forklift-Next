import Link from 'next/link'
import Layout from '../components/core/Layout'
import Login from '../components/utilities/Login'

const Home = () => {
  return (
			<Layout>
				<Login />
				<Link href='/confirm'>
					<a>Confirm Page</a>
				</Link>
			</Layout>
  )
}

export default Home