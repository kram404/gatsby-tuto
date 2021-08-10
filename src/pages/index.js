import React from "react"
import Layout from '../components/layout'
import Metadata from "../components/metadata"

const Bookie = () => {
  return (
   <Layout>
       <div>
        <Metadata title="Kkodukotus" description="This is my home page" />
        <h1>Home page</h1>
        <h2>500 hundred miles</h2>
      </div>
    </Layout>
  )
}

export default Bookie