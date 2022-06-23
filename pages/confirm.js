import { useState } from "react"
import Link from 'next/link'
import Layout from "../components/core/Layout"
import SubmitUser from "../components/utilities/SubmitUser"

const Confirm = () => {

  return (
    <Layout>
      <SubmitUser />
      <Link href='/'>
        <a>Back</a>
      </Link>
    </Layout>
  )
}

export default Confirm