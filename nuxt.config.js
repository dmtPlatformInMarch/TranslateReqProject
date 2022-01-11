module.exports = {
    head: {
        title: "DMT",
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