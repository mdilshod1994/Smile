export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Фотостудия Смайлик | Сохраним ваши воспоминания',

    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Сохраним ваши воспоминания' },
      { property: 'og:site_name', content: "Фотостудия Смайлик" },
      { property: 'og:title', content: "Фотостудия Смайлик" },
      { property: 'og:description', content: "Сохраним ваши воспоминания" },
      { property: 'og:url', content: "https://xn----7sbydgeewavtw.xn--p1ai/" },
      { property: 'og:locale', content: "ru-RU" },
      { property: 'og:image', content: process.env.API_URL + 'favicon.png' },
      { property: 'og:image:width', content: "100" },
      { property: 'og:image:height', content: "100" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios.js',
    '@/plugins/gl-components.js',
    '@plugins/phone-mask.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
