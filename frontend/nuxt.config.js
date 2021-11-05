export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,
  router: {
    prefetchLinks: false
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  'normalize.css/normalize.css',
  '~assets/scss/mixins.scss'
  ],
  router: {
    middleware: ['auth']
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL:"/"
  },
  toast: {
    position: 'top-right',
    duration:'2000',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
},
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: 'api/auth/login', method: 'post' },
          register: { url: 'api/auth/register', method: 'post' },
          user:{ url: '/api/auth/user', method: 'get'},
          logout:{url:'apu/auth/logout', methods:'post'}
        }
      }
    },
  },
  loading: {
    color: '#9a9a9a',
    height: '3px',
    throttle: 0
   },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
  
}
