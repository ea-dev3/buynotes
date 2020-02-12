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

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const myQuery = `{
  allSitePage {
    edges {
      node {
        # try to find a unique id for each node
        # if this field is absent, it's going to
        # be inserted by Algolia automatically
        # and will be less simple to update etc.
        objectID: id
        component
        path
        componentChunkName
        internal {
          type
          contentDigest
          owner
        }
      }
    }
  }
}`

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => data.allSitePage.edges.map(({ node }) => node), // optional
    indexName: "index name to target", // overrides main index name, optional
    settings: {
      // optional, any index settings
    },
  },
]

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

    {
      resolve: "gatsby-plugin-flexsearch",
      options: {
        languages: ["en"],
        type: "MarkdownRemark",
        fields: [
          {
            name: "title",
            indexed: true,
            resolver: "frontmatter.title",
            attributes: {
              encode: "balance",
              tokenize: "strict",
              threshold: 6,
              depth: 3,
            },
            store: true,
          },
          {
            name: "description",
            indexed: true,
            resolver: "frontmatter.description",
            attributes: {
              encode: "balance",
              tokenize: "strict",
              threshold: 6,
              depth: 3,
            },
            store: false,
          },
          {
            name: "url",
            indexed: false,
            resolver: "fields.slug",
            store: true,
          },
        ],
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 650,
              tracedSVG: true,
              loading: "lazy",
              disableBgImageOnAlpha: true,
              wrapperStyle: fluidResult =>
                `flex:${_.round(fluidResult.aspectRatio, 2)};`,
            },
          },
        ],
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-scroll-reveal`,

    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },

    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
      },
    },

    {
      resolve: `gatsby-theme-medium`,
      options: {
        // basePath defaults to `/`
        basePath: `/notes`,
        contentPath: `${__dirname}/src/notes`,
        assetPath: `${__dirname}/src/images`,
        mdx: true,
      },
    },
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
