const pkg = require('./package')

module.exports = {

    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},

    vender:[
        'element-ui'
    ],
    babel:{
        "plugins": [["component", [
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-default"
            },
            'transform-async-to-generator',
            'transform-runtime'
        ]]],
        comments: true
    },
    plugins: [
        { src: '~plugins/element-ui', ssr: true }
    ],
    css: [
    // 全部引用的时候需要用到
        'element-ui/lib/theme-chalk/index.css'
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [],

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {

        }
    }
}
