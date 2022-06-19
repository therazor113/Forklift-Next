import Link from 'next/link'

import Layout from '../components/core/Layout'

const Home = () => {
  return (
    <Layout>
			<h1>Welcome!</h1>
			<Link href='/login'>
				<a>Login</a>
			</Link>
		</Layout>
  )
}

export default Home