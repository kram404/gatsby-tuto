import React from "react"
import Layout from '../components/layout'
import Metadata from "../components/metadata"
import Img from 'gatsby-image'
import * as blogStyles from './blog.module.scss'

import { useStaticQuery, graphql, Link } from 'gatsby'



const Blog = () => {
   const data = useStaticQuery(
    graphql `
      query {
       allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
         node {
          frontmatter {
           title        
           date(formatString: "DD MMMM, YYYY")
           featured {
             childImageSharp {
               fluid(maxWidth: 450) {
                 ...GatsbyImageSharpFluid }
               }
             }       
          }       
          timeToRead       
          excerpt       
          id
          fields {
            slug
          }      
        }     
       }    
      }   
     }
    `
   )
   return (
      <Layout>
       <Metadata title="Articles on roof" description="Blog page" />
       <ul className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
         return (
          <li className={blogStyles.post} key={edge.node.id}>
           <h2>
            <Link to={`/blog/${edge.node.fields.slug}/`}>
             {edge.node.frontmatter.title}       </Link>
           </h2>
           <div className={blogStyles.meta}>
            <span>
             Posted on {edge.node.frontmatter.date} <span> / </span>{" "}        {edge.node.timeToRead} min read       </span>
           </div>
           {edge.node.frontmatter.featured && (
            <Img        className={blogStyles.featured}        fluid={edge.node.frontmatter.featured.childImageSharp.fluid}        alt={edge.node.frontmatter.title}       />
           )}      
           <p className={blogStyles.excerpt}>{edge.node.excerpt}</p>
           <div className={blogStyles.button}>
            <Link to={`/blog/${edge.node.fields.slug}/`}>Read More</Link>
           </div>
          </li>
         )   })}
       </ul>
      </Layout>
     )
  }

export default Blog