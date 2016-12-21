import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import Keen from './keen-ui'
// import * as filters from './filters'

sync(store, router)

// register global utility filters.
// Object.keys(filters).forEach(key => {
// 	Vue.filter(key, filters[key])
// })

Vue.use(Keen)

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
const app = new Vue({
    router,
    store,
    ...App // Object spread copying everything from App.vue
})

// expose the app, the router and the store.
// note we not mounting the app here, since bootstrapping will be
// different depending on whether we are in browser or on the server.
export { app, router, store }