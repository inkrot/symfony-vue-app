import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Info from './views/Info'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/front',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/info',
            component: Info
        }
    ]
})