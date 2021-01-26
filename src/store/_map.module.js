// import { router } from '@/router'
import { ApiService } from '@/services'
import { MarkersStorage } from '@/services'

export const map = {
    namespaced: true,
    state: {
        markers: [],
        selected_marker: null
    },

    actions: {

        getSavedMarkers ({commit}) {
            const markers = MarkersStorage.getMarkers()
            commit('SET_INITIAL_MARKERS', markers)
        },

        async saveMarker ({ commit, state }, marker) {
            try {
                const response = await ApiService.post(marker)
                console.log(response)
                commit('SAVE_MARKER', marker)
                MarkersStorage.saveMarkers(state.markers)
            } catch (e) {
                throw Error(e)
            }
        },

        selectMarker ({commit}, index) {
            commit('SET_SELECTED_MARKER', index)
        },

        deleteMarker ({commit}, index) {
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
