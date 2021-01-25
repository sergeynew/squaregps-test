module.exports = {
    "runtimeCompiler": true,
    "configureWebpack": {
        "resolve": {
            "alias": {
                "@": "/Users/novikovsergey/Desktop/Sites/squaregps-test-app/src",
                "styles": "/Users/novikovsergey/Desktop/Sites/squaregps-test-app/src/assets/sass"
            },
            "symlinks": false
        }
    },
    "css": {
        "loaderOptions": {
            "sass": {
                "additionalData": "@import \"~@/assets/sass/_variables.sass\""
            }
        }
    },
    "transpileDependencies": [
        "vuetify"
    ]
}