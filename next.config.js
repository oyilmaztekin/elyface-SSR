/* eslint-disable */
const withPlugins = require("next-compose-plugins");
const size = require("next-size");
const sass = require("@zeit/next-sass");
const css = require("@zeit/next-css");
const typeScript = require('@zeit/next-typescript');
const images = require("next-images");


const {
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
  PHASE_DEVELOPMENT_SERVER,
  PHASE_EXPORT
} = require("next/constants");

// next.js configuration
const nextConfig = {
  useFileSystemPublicRoutes: false,
  distDir: ".next"
};

module.exports = withPlugins(
  [
    css,
    [
      sass,
      {
        cssModules: true,
        cssLoaderOptions: {
          localIdentName: "[local]"
        },
        [PHASE_PRODUCTION_BUILD + PHASE_EXPORT]: {
          cssModules: false,
          cssLoaderOptions: {
            localIdentName: "[local]--[hash:64:5]"
          },
          minimize: true
        }
      }
    ],
    typeScript,
    images,
    size,
    [
      {
        exportPathMap: async function(
          defaultPathMap
        ) {
          return {
            "/": { page: "/" },
            "/gundem": { page: "/gundem" },
            "/egitim": { page: "/egitim" },
            "/ekonomi": { page: "/ekonomi" },
            // "/emlak": { page: "/emlak" },
            "/magazin": { page: "/magazin" },
            // "/seyahat": { page: "/seyahat" },
            "/siyaset": { page: "/siyaset" },
            "/spor": { page: "/spor" },
            "/teknoloji": { page: "/teknoloji" },
            "/yasam": { page: "/yasam" }
            // '/about': { page: '/about' },
            // '/readme.md': { page: '/readme' },
            // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
            // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
            // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
          };
        }
      }
    ]

    // load and apply a plugin only during development server phase
    // [optional(() => require('@some-internal/dev-log')), [PHASE_DEVELOPMENT_SERVER]],
  ],
  nextConfig
);
