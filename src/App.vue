<template lang="pug">
  v-app
    v-app-bar(app color="primary" dark)
        v-spacer
        v-btn(to="/map" text) {{ $t('menu.map') }}
        v-btn(to="/about" text) {{ $t('menu.about') }}
    v-main
        v-container
            v-main
                router-view
  </v-app>
</template>

<script>

export default {
    name: 'App',
}
</script>
