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

    `gatsby-plugin-react-helmet`
  ],
};
