import Vue from 'vue'
import {sync} from 'vuex-router-sync'

import {currency} from './vues/fliter/currency'
import resource from './vues/resource/resource'
import store from './vues/vuex/store'
import router from './vues/route/route'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


Vue.filter('currency', currency)

//It adds a route module into the store, which contains the state representing the current route:
//store.state.route.path   // current path (string)
//store.state.route.params // current params (object)
//store.state.route.query  // current query (object)
sync(store, router)

Vue.use(ElementUI)

var app = new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})

