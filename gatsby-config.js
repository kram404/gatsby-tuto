/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
   siteMetadata: {
      title: "Klaabu kuul",
      description: "gatsby jumborull",
      author: "Boo"
   },
   plugins: ["gatsby-plugin-sass",
             "gatsby-transformer-remark",
              {
      resolve: "gatsby-source-filesystem",
      options: {
         name: "src",
         path: `${__dirname}/src/`,
      },
   }, ],
}