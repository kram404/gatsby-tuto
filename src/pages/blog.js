import React from "react"
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'

const About = () => {
  return (
    <Layout>
      <div>
        <h1>Blog page</h1>
        <p>Mullivann ja Heebrea</p>
      </div>
    </Layout>
  )
}

export default About