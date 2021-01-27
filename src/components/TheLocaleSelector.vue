<template lang='pug'>
    v-menu(top)
        template(v-slot:activator="{ on, attrs }")
            v-btn.ma-6(
                color="white"
                v-bind="attrs"
                v-on="on"
                icon
                small
            )
                v-icon(dark) mdi-web
        v-list
            v-list-item(
                v-for="(name, code) in langs"
                :key="code"
                @click="changeLocale(code)"
                :class="{'grey lighten-2': code === current_locale}"
            )
                v-list-item-title {{ name }}
</template>

<script>
export default {
    name: 'LocaleSelector',
    data () {
        return { 
            langs: {
                en: 'English',
                ru: 'Русский'
            } 
        }
    },

    methods: {
        changeLocale (code) {
            this.$i18n.locale = code
        }
    },

    computed: {
        current_locale () {
            return this.$i18n.locale
        }
    }
}
</script>
