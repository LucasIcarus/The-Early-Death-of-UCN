import Vue from 'vue'
import Home from '../components/Home.vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/', component: Home },
    ]
})
