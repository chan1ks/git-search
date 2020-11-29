/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Anton',
            variable: true,
            weights: ['200..900'],
          },
        ],
      },
    },
  ],
};
