module.exports = {
  siteMetadata: {
    title: `Jack Colvin Full-Stack`,
    description: `Full-Stack Developer, Content Marketing, Agile, Fast, Affordable.`,
    author: `@jpc`,
    url: "https://www.colvin.xyz",
    image: "/src/images/grad.png"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        fieldName: "personalgraphql",
        url: process.env.GRAPHQL_API_KEY,
        typeName: "PersonalGraphQL",
        refetchInterval: 60
      }
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
        icon: 'src/images/grad.png'
      }
    },
    "gatsby-plugin-sass",
    "gatsby-image"
  ]
};
