module.exports = {
  // siteMetadata: {
  //   title: "Dev Blog",
  //   description: "Gatsbyで作成したブログサイトです。",
  //   author: "Engineer X"
  // },
  /* Your site config here */
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
  ],
}