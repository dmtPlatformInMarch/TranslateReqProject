import Vue from 'vue'
import VueGtag from 'vue-gtag'

const prod = process.env.NODE_ENV === 'production';

export default ({app}) => {
    Vue.use(VueGtag, {
        enabled: prod,
        config: {
            id: 'G-Z0CSMSRQFB',
        }
    }, app.router);
}