import Vuex from 'vuex'
import Vue from 'vue'

import { map } from './_map.module'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: { map },
})
