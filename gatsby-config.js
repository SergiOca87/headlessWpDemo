/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Wordpress Gatsby 5 Demo",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://demo.inmotionrealestate.com/headless2023/graphql",
      },
    },
    "gatsby-plugin-styled-components",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },

    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Poppins`,
            file: `https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap`,
          },
        ],
      },
    },

    {
      resolve: "gatsby-plugin-sharp",
      defaults: {
        formats: [`auto`],
        placeholder: `BLURRED`,
        quality: 90,
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: "gatsby-plugin-scroll-reveal",
      options: {
        threshold: 0, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      },
    },
    // {
    //   resolve: `gatsby-plugin-scroll-reveal`,
    //   options: {
    //     threshold: 0, // Percentage of an element's area that needs to be visible to launch animation
    //     once: true, // Defines if animation needs to be launched once
    //     enterEventName: 'sal:in', // Enter event name
    //     exitEventName: 'sal:out', // Exit event name
    //   }
    // },
    // {
    //   resolve: "gatsby-plugin-manifest",

    // },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images/`,
      },
      __key: "images",
    },
  ],
}
