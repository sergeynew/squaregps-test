import Vue from 'vue'
import App from './App.vue'

import { store } from './store'
import { router } from './router'

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
// Of course need to save current locale 
// to localStorage for user
// in production app. 
// But i use 'ru' as default.
const i18n = new VueI18n({
    locale: 'ru', 
    messages: locales 
})

Vue.config.productionTip = false

const app = new Vue({
    el: '#app',
    store,
    router,
    vuetify,
    i18n,
    render: (h) => h(App)
})

export default app
