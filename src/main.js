// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import routes from './routes'
/* eslint-disable no-new */

Vue.use(Router)

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects
  // console.log('going to:', to)
  next()
})

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
