import Vue from 'vue'
import App from './App.vue'

import { store } from './store'
import { router } from './router'

import styles from './assets/sass/main.sass'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: process.env.VUE_APP_GOOGLE_MAPS_KEY
    }
})

Vue.config.productionTip = false

const app = new Vue({
    el: '#app',
    store,
    router,
    styles,
    vuetify,
    render: (h) => h(App)
})
export default app
