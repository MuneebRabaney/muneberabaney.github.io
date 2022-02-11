// Initialize dotenv
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
});
const path = require('path');

module.exports = {
  siteMetadata: {
    title: "Portfolio",
    logo: '@{ Hello World }',
    description: "My portfolio",
    author: "Muneeb Rabaney",
    siteUrl: "https://muneebrabaney.netlify.app",
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
        start_id: '/',
        start_url: `/`,
        name: `My Portfolio`,
        short_name: `portfolio`,
        orientation: "portrait",
        description: "Portfolio of Muneeb Rabaney",
        "display": "standalone",
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        background_color: "#000000",
        theme_color: "#000000",
        icon: `src/images/icon-new.png`, // This path is relative to the root of the site.
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
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
          layout: require.resolve(`./src/layouts/base.js`)
        }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
