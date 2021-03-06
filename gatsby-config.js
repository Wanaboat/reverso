require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Reverso`,
    description: `Fast and easy dinghy.. as website also.`,
    author: `@reverso`,
    url:`https://sailreverso.com`,
    siteUrl:`https://sailreverso.com`
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-force-trailing-slashes`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://sailreverso.com',
        sitemap: 'https://sailreverso.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-force-trailing-slashes`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: process.env.GATSBY_MAILCHIMP_EN_AUDIENCE, // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      }
    },

    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "1103118453206870",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `hind\:300,400`,
          `roboto\:300,600,700,900`
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
          product: require('./src/schemas/product.json'),
          accordion: require('./src/schemas/accordion.json'),
          criteria_list: require('./src/schemas/criteria_list.json')
        },
        shouldDownloadImage: ({ node, key, value }) => {
          if( value ){
            return true
          }
        },
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-97930234-1",
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 95,
        failOnError: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SailReverso`,
        short_name: `Reverso`,
        start_url: `https://sailreverso.com`,
        background_color: `#FFFFFF`,
        theme_color: `#ED1C24`,
        display: `standalone`,
        icon: `src/images/logo-red-r.png`, // This path is relative to the root of the site.
        icon_options: {
          
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-remove-serviceworker`
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     precachePages: [`/`, `/*`, `/fr/*`],
    //   },
    // },
  ],
}
