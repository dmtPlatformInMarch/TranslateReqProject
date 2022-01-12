module.exports = {
    head: {
        title: "DMT",
        link: [{
            rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'
        }],
    },
    buildModules: [
        '@nuxtjs/vuetify',
    ],
    modules: [
        '@nuxtjs/axios',
    ],
    moduleContext: {
        './node_modules/pdfmake/build/vfs_fonts.js': 'window',
    },
    plugins: [],
    vuetify: {

    }
}