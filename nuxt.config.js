export default {
  // // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'VTHacks X',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: 'VTHacks X' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A landing page for VTHacks, a MLH hackathon organized by Virginia Tech students.',
      },
      { hid: 'image', name: 'image', content: '~static/sitemeta.svg' },
      { hid: 'url', name: 'url', content: 'https://vthacks.com' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.ico' },
    ],
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
    // https://www.npmjs.com/package/nuxt-lazy-load
    'nuxt-lazy-load',
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // cache policy
  render: {
    static: {
      maxAge: 60 * 60 * 24 * 30 * 3 * 1000, // ~3 months
    },
  },

  // https://nuxtjs.org/docs/2.x/deployment/netlify-deployment
  generate: {
    fallback: true,
  },

  // buefy options
  buefy: {
    materialDesignIcons: false,
  },

  // g-analytics options
  googleAnalytics: {
    id: 'UA-188278229-1',
  },

  // pwa icon options
  pwa: {
    manifest: {
      name: 'VTHacks X',
      short_name: 'VTHacks',
      description:
        'A landing page for VTHacks, a MLH hackathon organized by Virginia Tech students.',
      background_color: '#F89B6A',
      theme_color: '#F89B6A',
    },
  },
}
