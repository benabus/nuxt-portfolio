export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: "Ben Serrette's Portfolio",
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['@/assets/styles/custom.scss'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        [
            'nuxt-fontawesome',
            {
                component: 'fa',
                imports: [
                    //   import whole set
                    {
                        set: '@fortawesome/free-solid-svg-icons',
                        icons: ['fas', 'faBars']
                    },
                    {
                        set: '@fortawesome/free-brands-svg-icons',
                        icons: ['fab', 'faGithubSquare', 'faGithub', 'faLinkedin']
                    }
                    // import 2 icons from set
                    // please note this is PRO set in this example,
                    // you must have it in your node_modules to actually import
                    //   {
                    //     set: '@fortawesome/pro-regular-svg-icons',
                    //     icons: ['bars']
                    //   }
                ]
            }
        ]
    ],
    bootstrapVue: {
        bootstrapCSS: false, // Or `css: false`
        bootstrapVueCSS: false // Or `bvCSS: false`
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
};
