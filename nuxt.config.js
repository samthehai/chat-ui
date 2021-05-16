import fiber from 'fibers';
import sass from 'sass';

export default {
  ssr: true,
  srcDir: 'src/',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'YChatter',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/reset.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/firebase',
  ],

  styleResources: {
    scss: ['@/assets/scss/_variables.scss'],
  },

  firebase: {
    config: {
      apiKey: 'AIzaSyCPXo4XecOzgbTUiGzXObVt0_sI9qfjBRc',
      authDomain: 'lengame-1.firebaseapp.com',
      projectId: 'lengame-1',
      storageBucket: 'lengame-1.appspot.com',
      messagingSenderId: '862828780091',
      appId: '1:862828780091:web:0d4b6556b80a1fad7b5a1e',
      measurementId: 'G-LJRGXQ2WB5',
    },
    services: {
      auth: {
        ssr: true,
        initialize: {
          onAuthStateChangedAction: 'login/ON_AUTH_STATE_CHANGED',
        },
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', '@nuxtjs/pwa', '@nuxtjs/firebase'],

  router: {},

  pwa: {
    // disable the modules you don't need
    meta: false,
    icon: false,

    workbox: {
      importScripts: ['/firebase-auth-sw.js'],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === 'development',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: sass,
        sassOptions: {
          fiber,
        },
      },
    },
    // Run ESLint on save
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(ts|js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
