// Example next.config.js for adding a loader that depends on babel-loader
// This source was taken from the @next/mdx plugin source:
// https://github.com/zeit/next.js/tree/canary/packages/next-mdx


const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    webpack: (config, { isServer }) => {

      if (!isServer) {
        config.node = {
          fs: 'empty'
        }

        return config;
      }
  
      return config
    },
  });