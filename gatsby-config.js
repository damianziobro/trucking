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
        // You need a accessToken here to run the project. I don't publish it to public repo because of security reasons.
        accessToken: '',
      },
    },
  ],
};
