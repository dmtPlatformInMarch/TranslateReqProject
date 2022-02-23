module.exports = {
    head: {
        title: "DMT",
        link: [{
            rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'
        }],
    },
    buildModules: [
        '@nuxtjs/vuetify',
        '@nuxtjs/moment',
    ],
    moment: {
        locales: ['ko'],
    },
    build: {
        analyze: false,
        extend(config, { isClient, isServer, isDev }) {
            if (isServer && !isDev === 'production') {
                config.devtool = 'hidden-source-map';
            }
        },
    },
    modules: [
        '@nuxtjs/axios',
    ],
    moduleContext: {
        './node_modules/pdfmake/build/vfs_fonts.js': 'window',
    },
    plugins: [
        { src: '~/plugins/manage.js', ssr: false },
    ],
    vuetify: {},
    axios: {
        browserBaseURL: 'http://localhost:3085',
        baseURL: 'http://localhost:3085',
        https: false,
    },
}