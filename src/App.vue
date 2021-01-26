<template lang="pug">
  v-app
    v-app-bar(
        app
        color="primary"
        dark
    )
        v-spacer
        v-btn(
            to="/map"
            text
        ) Карта
            //- router-link(to="/map")
        v-btn(
            to="about"
            text
        ) О задании
            //- router-link(to="/") 
    v-main
        v-container
            v-content
                router-view
  </v-app>
</template>

<script>

export default {
    name: 'App',
    data: () => ({
    //
    }),
};
</script>
