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
   plugins: [
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-sass",
      {
         resolve: "gatsby-source-filesystem",
         options: {
            name: "src",
            path: `${__dirname}/src/`,
         },
      },
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      {
         resolve: "gatsby-transformer-remark",
         options: {
            plugins: [
               {
                  resolve: "gatsby-remark-images",
                  options: {
                     maxWidth: 750,
                     linkImagesToOriginal: false,
                  }
               }
            ]
         }
      }
    ],
}