module.exports = {
  siteMetadata: {
    title: 'Trucking',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '2z4g2bzv111r',
        accessToken:
          'e317aaf5470b3f44018edd21ccf4070c50c29ebe0459c6244db350431e42371d',
      },
    },
  ],
};
