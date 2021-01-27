<template lang="pug">
  v-app
    v-app-bar(app color="primary" dark)
        v-app-bar-title {{  $t('app_title') }}
        v-spacer
        TheLocaleSelector
        v-btn(to="/map" text) {{ $t('menu.map') }}
        v-btn(to="/about" text) {{ $t('menu.about') }}
    v-main
        v-container
            v-main
                router-view
  </v-app>
</template>

<script>
import TheLocaleSelector from '@/components/TheLocaleSelector.vue'
export default {
    name: 'App',

    components: {
        TheLocaleSelector
    }
}
</script>
