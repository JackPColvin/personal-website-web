module.exports = {
  siteMetadata: {
    title: `Jack Colvin's Personal Website`,
    description: `A talented new grad, Jack is seeking a challenging full stack role.`,
    author: `@jackpcolvin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        fieldName: 'personalgraphql',
        url: 'http://localhost:8080/v1/graphql',
        typeName: 'PersonalGraphQL',
        refetchInterval: 60,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-image',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
