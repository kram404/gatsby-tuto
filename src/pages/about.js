import React from "react"
import Layout from '../components/layout'
import Metadata from "../components/metadata"

const About = () => {
  return (
    <Layout>
      <div>
        <Metadata title="we do stuff" description="about what we do ;)" />
        <h1>About page</h1>
        <h2>Im here to stay - 500 hundred miles</h2>
      </div>
    </Layout>
  )
}

export default About