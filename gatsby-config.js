module.exports = {
  siteMetadata: {
    // or `casual`
    portraitStyle: `business`,
    // or `form`
    contactStyle: `simple`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['./node_modules/'],
        sourceMap: true,
      },
    },

    {
      resolve: `gatsby-plugin-postcss`
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [], // just in case those previously mentioned remark plugins sound cool :)
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DreadLabs Softwareentwicklung`,
        short_name: `dreadlabs`,
        start_url: `/`,
        background_color: `#3e4eb8`,
        theme_color: `#2f3ba2`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        // TODO: check on devices (android, ios, win)
        icon: `src/images/touch/chrome-touch-icon-192x192.png`,
        include_favicon: true
      }
    },

    {
      resolve: `gatsby-plugin-offline`,
      options: {
        cacheId: `dreadlabs-offline`
      }
    },
  ],
};
