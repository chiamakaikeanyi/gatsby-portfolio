import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <h1>Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist. Please return <Link to="/" style={{
      color: '#4DB39A',
    }}>home</Link> </p>
  </Layout>
)

export default NotFoundPage
