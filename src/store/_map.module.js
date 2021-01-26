import { router } from '@/router'
import { ApiService } from '@/services'
import { MarkersStorage } from '@/services'

export const map = {
    namespaced: true,
    state: {
        markers: [],
        selected_marker: null
    },

    actions: {

        getInitialMarkersState ({ commit, state }, initial_id = null) {
            const markers = MarkersStorage.getMarkers()
            commit('SET_INITIAL_MARKERS', markers)
        
            if (initial_id && state.markers[initial_id - 1]) {
                commit('SET_SELECTED_MARKER', initial_id - 1)
            } else {
                router.push({ name: 'map-index' })
            }
        },

        async saveMarker ({ commit, state }, marker) {
            try {
                // Emulate call to API. 
                const response = await ApiService.post(marker)
                console.log(response)
                commit('SAVE_MARKER', marker)
                MarkersStorage.saveMarkers(state.markers)
                
            } catch (e) {
                throw Error(e)
            }
        },

        selectMarker ({ commit }, id) {
            commit('SET_SELECTED_MARKER', id)
            router.push({ name: 'map-marker', params: { id: id + 1 } })
        },

        deleteMarker ({ commit }, index) {
            MarkersStorage.deleteMarker(index)
            commit('DELETE_MARKER', index)
        } 
    },

    mutations: {

        SET_INITIAL_MARKERS (state, markers) {
            state.markers = markers
        },

        SAVE_MARKER (state, marker) {
            state.markers.push(marker)
        },

        DELETE_MARKER (state, index) {
            state.markers.splice(index, 1)
        },

        SET_SELECTED_MARKER (state, index) {
            state.selected_marker = {
                id: index,
                ...state.markers[index]
            }
        }

    }
}
