<template lang='pug'>
    .markers-list-component.mr-2
        v-card(
            :elevation="markers.length + 1"
        )
            v-card-title {{ $t('pages.map.markers') }}
            .markers-list.d-flex.flex-column
                v-card.markers-list__item.pa-2.pointer(
                    v-for="marker, index in markers"
                    :key="index"
                    :class="{'selected': selected_marker && index === selected_marker.id}"
                    @click="selectMarker(index)"
                    outlined
                    shaped
                    tile
                )
                    .item-name.font-weight-medium Маркер №{{ index + 1 }}
                    .item-coordinates {{ cutCoordinate(marker.lat) }}, {{ cutCoordinate(marker.lng) }}
                    v-btn(
                        @click="deleteMarker(index)"
                        color="red" 
                        icon
                        x-small
                    )
                        v-icon(dark) mdi-cancel
    </template>

<script>

import { mapState } from 'vuex'
import { cutCoordinate } from '@/utils/helpers'

export default {
    name: 'MarkersListComponent',

    computed: {
        ...mapState({
            markers: (state) => state.map.markers,
            selected_marker: (state) => state.map.selected_marker,
        })
    },

    methods: {
        cutCoordinate: cutCoordinate,

        selectMarker (id) {
            this.$store.dispatch('map/selectMarker', id)
        },

        deleteMarker (id) {
            this.$store.dispatch('map/deleteMarker', id)
        }
    }
}
</script>

<style lang="sass">
    .markers-list-component
        .markers-list
            max-height: 530px
            overflow-y: scroll
            &__item
                &.selected 
                    background: rgba(0, 0, 0, .1)
</style>