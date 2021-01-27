import Vue from 'vue'
import App from './App.vue'

import { store } from './store'
import { router } from './router'

import styles from './assets/sass/main.sass'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueI18n from 'vue-i18n'

import { locales } from '@/lang'

Vue.use(VueI18n)
Vue.use(VueGoogleMaps, {
    load: {
        key: process.env.VUE_APP_GOOGLE_MAPS_KEY
    }
})
const i18n = new VueI18n({
    locale: 'ru', 
    messages: locales 
})

Vue.config.productionTip = false

const app = new Vue({
    el: '#app',
    store,
    router,
    styles,
    vuetify,
    i18n,
    render: (h) => h(App)
})


export default app
