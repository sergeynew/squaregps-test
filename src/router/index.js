import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        // { path: '/about', component:  },
        // { path: '/map', component:  },
        { path: '*', redirect: '/map' },
    ],
})
