import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './config'

Vue.use(VueRouter);

const router = new VueRouter({
  //mode: 'history',
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    let user = JSON.parse(sessionStorage.getItem('user'));
    if(user){
      next({ path: '/' })
    }else{
      next()
    }
  }else{
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (!user) {
      next({ path: '/login' })
    } else {
      next()
    }
  }
})

export default router
