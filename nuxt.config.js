export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test001',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/fontawesome',
      {
        component: 'Fa',
        suffix: true,
        icons: {
          solid: true,
          regular: true,
          brands: true,
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://firebase.nuxtjs.org/
    '@nuxtjs/firebase',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  tailwindcss: {
    config: {
      plugins: [require('daisyui')],
    },
  },

  firebase: {
    config: {
      apiKey: 'AIzaSyAcBQ4lpFBRb-usD3qQqhJvBvDQL5q5UXE',
      authDomain: 'store-template-1451c.firebaseapp.com',
      projectId: 'store-template-1451c',
      storageBucket: 'store-template-1451c.appspot.com',
      messagingSenderId: '1054440576088',
      appId: '1:1054440576088:web:36a276efd5050be9cba62d',
      measurementId: 'G-C2ZRG3SWBT',
    },
    services: {
      firestore: {
        memoryOnly: false,
        enablePersistance: true,
      },
    },
  },
}
