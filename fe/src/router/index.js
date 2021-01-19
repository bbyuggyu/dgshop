import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/shop/Main'
import ShopDetail from '../views/shop/detail/Main'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/shop', component: Shop },
    { path: '/shop/:id', component: ShopDetail }
  ],
  mode: 'history',
  base: process.env.BASE_URL,
  VueRouter
})

export default router
