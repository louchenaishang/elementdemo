//vue全家桶
import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import {currency} from './vues/fliter/currency'
import resource from './vues/resource/resource'
import store from './vues/vuex/store'
import router from './vues/route/route'
import App from './App.vue'

//element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

//页面顶部进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//模拟请求数据
import Mock from './mock'


//=========我是分割线=========
//初始化mock
Mock.bootstrap()

//初始化进度条属性
NProgress.configure({ showSpinner: false });

//vue,使用element ui
Vue.use(ElementUI)

//vue,使用过滤器
Vue.filter('currency', currency)

//vue,将route信息注册到vuex
//It adds a route module into the store, which contains the state representing the current route:
//store.state.route.path   // current path (string)
//store.state.route.params // current params (object)
//store.state.route.query  // current query (object)
sync(store, router)

//vue,初始化实例
var app = new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})





