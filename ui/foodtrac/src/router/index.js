import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import About from '../views/About.vue'
import Foods from '@/components/Foods.vue'
import Food from '@/components/Food.vue'
import Notifications from '@/components/Notifications.vue'
import Education from '@/components/Education.vue'
import Settings from '@/components/Settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/foods',
    name: 'Foods',
    component: Foods
  },
  {
    path: '/foods/:id',
    name: 'Food',
    component: Food
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  },
  {
    path: '/Education',
    name: 'Education',
    component: Education
  },
  {
    path: '/Settings',
    name: 'Setting',
    component: Settings
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
