export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'VTHacks 8',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: 'VTHacks 8' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A landing page for VTHacks, a MLH hackathon organized by Virginia Tech students.',
      },
      { hid: 'image', name: 'image', content: '~static/sitemeta.svg' },
      { hid: 'url', name: 'url', content: 'https://vthacks.com' },
    ],
    link: [{ rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~sass/buefy-overwrite.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://github.com/nuxt-community/svg-module#nuxtjssvg
    '@nuxtjs/svg',
    // https://google-analytics.nuxtjs.org/
    '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/nuxt-community/style-resources-module#readme
    '@nuxtjs/style-resources',
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // buefy options
  buefy: {
    materialDesignIcons: false,
  },

  // g-analytics options
  googleAnalytics: {
    id: process.env.GANALYTICS_ID,
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GANALYTICS_ID
    }
  }

  // pwa icon options
  pwa: {
    manifest: {
      name: 'VTHacks 8',
      description:
        'A landing page for VTHacks, a MLH hackathon organized by Virginia Tech students.',
      background_color: '#F89B6A',
    },
  },
}
