require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Reverso`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@reverso`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-intl`,
    //   options: {
    //     // language JSON resource path
    //     path: `${__dirname}/src/intl`,
    //     // supported language
    //     languages: [`fr`, `en`],
    //     // language file path
    //     defaultLanguage: `en`,
    //     // option to redirect to `/ko` when connecting `/`
    //     // redirect: true,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `hind\:300,400,400,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'reverso',
        prismicToolbar: true,
        schemas: {
           homepage: require('./src/schemas/homepage.json'),
           page: require('./src/schemas/page.json'),
        },
        shouldDownloadImage: ({ node, key, value }) => {
          if( value ){
            return true
          }
          console.log(
            //node,
            // key,
            value
          )
        },
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-165721757-1",
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/admin/": [
            // matching headers (by type) are replaced by Netlify with more specific routes
            "Basic-Auth: Reverso:Reverso#97400",
          ],
        },
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Reverso',
        short_name: 'Reverso',
        start_url: '/',
        background_color: '#FB8600',
        theme_color: '#FB8600',
        display: 'minimal-ui',
        icon: 'src/images/logo-red-r.png',
      },
    },
    `gatsby-plugin-react-helmet`,
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
        name: `Reverso`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#ED1C24`,
        display: `minimal-ui`,
        icon: `src/images/logo-red-r.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/fr/*`],
      },
    },
  ],
}
