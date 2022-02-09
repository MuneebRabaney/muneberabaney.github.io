// Initialize dotenv
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
});
const path = require('path');

module.exports = {
  siteMetadata: {
    title: `@{ Hello World }`,
    description: `My portfolio`,
    author: `Muneeb Rabaney`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: {
          options: {
            debug: process.env.NODE_ENV !== "production" && true,
            sourceMap: true,
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#69BAE4`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#69BAE4`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
			resolve: 'gatsby-plugin-pdf',
			options: {
				paths: ['/showcase?page=0', '/showcase?page=1'],
				outputPath: '/public/exports',
			},
		},
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": path.resolve(__dirname, "src"),
          "@components": path.resolve(__dirname, "src/components"),
          "@pages":  path.resolve(__dirname, "src/pages"),
          "@styles":  path.resolve(__dirname, "src/styles"),
          "@images":  path.resolve(__dirname, "src/images"),
          "@layouts": path.resolve(__dirname, "src/layouts"),
          "@templates":  path.resolve(__dirname, "src/templates"),
        },
        extensions: ["js", "jsx", "css", "sass", "png", "jpg", "jpeg"]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
