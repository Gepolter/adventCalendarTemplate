import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//import rg4js from 'raygun4js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
/*
router.afterEach((to, from) => {
  rg4js('trackEvent', {
    type: 'pageView',
    path: to.path
  });
})
*/
export default router
