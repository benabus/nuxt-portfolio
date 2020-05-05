export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        // titleTemplate: '%s - Ben Serrette\'s Portfolio',
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
            },
            { name: 'msapplication-TileColor', content: '#800080' },
            { name: 'theme-color', content: '#ffffff' },
            { hid: 'og:type', property: 'og:type', content:'website'},
            { hid: 'og:site_name', property: 'og:site_name', content:`Ben Serrette's Portfolio`},
            { hid: 'og:title', property: 'og:title', content:`Ben Serrette's Portfolio`},
            { hid: 'og:description', property: 'og:description', content:`Ben Serrette's Portfolio`},
            { hid: 'og:url', property: 'og:url', content:'http://benserrette.com'},
            { hid: 'og:image', property: 'og:image', content:'http://benserrette.com/assets/img/truck.jpg'},

        ],
        link: [
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: '/apple-touch-icon.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: '/favicon-32x32.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: '/favicon-16x16.png'
            },
            { rel: 'manifest', href: '/site.webmanifest' },
            {
                rel: 'mask-icon',
                href: '/safari-pinned-tab.svg',
                color: '#800080'
            }
        ]
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
                        icons: [
                            'fab',
                            'faGithubSquare',
                            'faGithub',
                            'faLinkedin'
                        ]
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
