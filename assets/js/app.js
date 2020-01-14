// css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';

// js
//import $ from 'jquery';
import 'bootstrap';
import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
    router,
    el: '#app',
    components: { App },
})

/*
Also available approach
new Vue({
    router,
    render: h => h(App),
    components: { App },
}).$mount('#app')
 */