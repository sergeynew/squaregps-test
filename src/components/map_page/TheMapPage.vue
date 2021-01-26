<template lang='pug'>
    .map-page
        v-row(alight='center' no-gutters)
            v-col.col-6.col-md-4 
                markers-list()
            v-col.col-12.col-sm-6.col-md-8 
                google-map()
</template>

<script>
import GoogleMap from './GoogleMap.vue'
import MarkersList from './MarkersList.vue'
export default {
    name: "TheMapPageComponent",

    props: {
        initial_marker_id: {
            type: Number,
            default: () => null
        }
    },
    
    components: {
        GoogleMap, MarkersList
    },

    mounted() {
        this.$store.dispatch('map/getInitialMarkersState', this.initial_marker_id)
    }
}
</script>

<style>

</style>