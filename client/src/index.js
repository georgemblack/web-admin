import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'

import store from './store'
import routes from './routes'

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App),
})
