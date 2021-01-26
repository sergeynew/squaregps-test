<template lang='pug'>
  .map-component
    GmapMap#map(
        ref="gmap"
        :option="map_options"
        :zoom="default_zoom"
        :center="default_map_center"
        style="width: 100%; height: 600px"
        @click="createMarkerOnClick"
    )
        GmapMarker(
            v-for="marker, id in markers"
            :key="id"
            ref="markers"
            :position="marker"
            @click="onMarkerClick($event, id)"
        )
        GmapInfoWindow(
            ref="info_window"
            :options="info_window_options"
        )
</template>

<script>
import { mapState } from 'vuex'
import { cutCoordinate } from '@/utils/helpers'

export default {
    name: "GoogleMapComponent",

    data () {
        return { 
            map: {},
            default_map_center: {
                lat: 56.827666856101466,
                lng: 60.5942530846571
            },
            default_zoom: 13,
            map_options: {
                zoomControl: true,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false,
                disableDefaultUi: false
            }
        }
    },

    computed: {
        ...mapState({
            markers: (state) => state.map.markers,
            selected_marker: (state) => state.map.selected_marker
        }),

        info_window_options () {
            const content = this.selected_marker ? `
                <b>ID:${this.selected_marker.id + 1}</b><br/> 
                Lat: ${cutCoordinate(this.selected_marker.lat)}<br/> 
                Lng: ${cutCoordinate(this.selected_marker.lng)}`
                : ''
            return {
                content,
                maxWidth: 200,
                opened: !!this.selected_marker
            }
        }
    },

    methods: {
        createMarkerOnClick(location) {
            const {lat, lng } = location.latLng
            this.$store.dispatch('map/saveMarker', { lat: lat(), lng: lng()})
        },

        panMapToLocation(marker) {
            this.$refs.gmap.panTo(marker)
            const markerObject = this.$refs.markers[marker.id]['$markerObject']
            this.$refs.info_window.$infoWindowObject.open(this.$refs.gmap.$mapObject, markerObject)
        },

        onMarkerClick(event, id) {
            this.$store.dispatch('map/selectMarker', id)
        }
    },

    watch: {
        selected_marker(marker) {
            this.panMapToLocation(marker)
        }
    }
}
</script>

<style lang='sass' scoped>
</style>