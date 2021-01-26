import Vue from 'vue'
import Router from 'vue-router'

import TheAboutPage from '@/components/TheAboutPage.vue'
import TheMapPage from '@/components/map_page/TheMapPage.vue'

Vue.use(Router)

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export const router = new Router({
    mode: 'history',
    routes: [
        { 
            name: 'about',
            path: '/about',
            component: TheAboutPage },
        { 
            name: 'map-index',
            path: '/map', 
            component:  TheMapPage
        },
        { 
            name: 'map-marker',
            path: '/map/:id', 
            component:  TheMapPage,
            props: (route) => ( { initial_marker_id: Number(route.params.id) })
        },
        { path: '*', redirect: '/map' },
    ],
})

