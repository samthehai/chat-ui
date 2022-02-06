import fiber from 'fibers';
import sass from 'sass';

export default {
  ssr: true,
  srcDir: 'src/',
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

  css: ['@/assets/scss/reset.scss'],

  plugins: [
    // { src: '@/plugins/apollo-ws-client.ts', mode: 'client' }
  ],

  components: true,

  env: {
    httpEndpoint: `${process.env.HTTP_ENDPOINT}/query`,
    wsEndpoint: `${process.env.WS_ENDPOINT}/query`,
  },

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/firebase'],

  styleResources: {
    scss: ['@/assets/scss/_variables.scss'],
  },

  firebase: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    },
    services: {
      auth: {
        ssr: true,
        initialize: {
          onAuthStateChangedAction: 'auth/ON_AUTH_STATE_CHANGED',
        },
      },
    },
  },

  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
    '@nuxtjs/apollo',
  ],

  router: {
    middleware: ['auth'],
  },

  pwa: {
    meta: false,
    icon: false,

    workbox: {
      importScripts: ['/firebase-auth-sw.js'],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === 'development',
    },
  },

  apollo: {
    clientConfigs: {
      default: '@/plugins/configurations/apollo-config-default.ts',
    },
  },

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
