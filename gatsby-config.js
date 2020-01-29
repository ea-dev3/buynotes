// TODO: dear user, please change this to your own instance
const netlifyInstance = "https://buynotes.netlify.com"
if (netlifyInstance === "https://buynotes.netlify.com/") {
  console.warn(`

**************************
WARNING: currently using Netlify Identity of https://jamstack-hackathon-starter.netlify.com

this is only meant for the working demo. if you forked or copied this code, you won't have access to this netlify identity instance

Go to your site, enable Netlify Identity, and paste that string here


More docs: https://www.netlify.com/docs/identity/

**************************
`)
}

module.exports = {
  siteMetadata: {
    title: "Buy Notes",
    description: `Access simplified notes, examples, exercises and test papers`,
    author: `Eugene Alex`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: `gatsby-plugin-netlify-identity`,
      options: {
        url: netlifyInstance,
      },
    },
    {
      resolve: "gatsby-theme-netlify-cms",
      options: {
        publicPath: "admin",
        htmlTitle: "Notes Manager",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/notes`,
        name: `notes`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-svgr-svgo`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
