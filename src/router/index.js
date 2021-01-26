import Vue from 'vue'
import Router from 'vue-router'

import TheAboutPage from '@/components/TheAboutPage.vue'
import TheMapPage from '@/components/map_page/TheMapPage.vue'

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        { path: '/about', component: TheAboutPage },
        { path: '/map', component:  TheMapPage },
        { path: '*', redirect: '/map' },
    ],
})
