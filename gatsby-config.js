/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/camelcase */
require('ts-node').register({ files: true })
require('dotenv').config({
  path: `.env`,
})
const proxy = require('http-proxy-middleware')

module.exports = {
  siteMetadata: {
    title: 'Supercharged Gatsby',
    description: 'Makes your developer experience great again',
    language: 'en',
    locale: 'en_US',
  },
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      }),
    )
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    'gatsby-plugin-layout',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Supercharged Gatsby',
        short_name: 'Supercharged',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        icon: 'static/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/svg/`,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.ts`,
        publicPath: 'admin',
        htmlTitle: 'Supercharged CMS',
      },
    },
    // 'gatsby-plugin-offline',
    // 'gatsby-plugin-remove-serviceworker',
  ],
}
