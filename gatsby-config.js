module.exports = {
  siteMetadata: {
    title: "Thomas Juhnke – Softwareentwickler",
    // or `casual`
    portraitStyle: `business`,
    // or `form`
    contactStyle: `simple`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto:400,700", "Roboto Slab:400,700", "Source Sans Pro:400,700", "Material Icons"]
        }
      }
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          includePaths: ["./node_modules/"],
          sourceMap: true
        }
      }
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "network-avatars",
        path: `${__dirname}/src/images/network`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [], // just in case those previously mentioned remark plugins sound cool :)
      },
    },

    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Thomas Juhnke – Softwareentwickler`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#10094c`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        // TODO: check on devices (android, ios, win)
        icon: `src/images/touch/chrome-touch-icon-192x192.png`,
        include_favicon: true
      },
    },

    {
      resolve: "gatsby-plugin-offline",
      options: {
        cacheId: "tjuhnke-offline"
      }
    },

    "gatsby-plugin-zopfli"
  ],
};
