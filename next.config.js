/* eslint-disable */
const withSass = require("@zeit/next-sass");

module.exports = withSass({
    exportPathMap: async function(defaultPathMap) { 
    return {
      "/": { page: "/" }
      // '/about': { page: '/about' },
      // '/readme.md': { page: '/readme' },
      // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
      // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
    };
  }
})