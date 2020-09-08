import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue';
import Recipes from '../views/Recipes.vue';
import ShoppingList from '../views/ShoppingList.vue';
Vue.use(VueRouter)

  const routes = [
  {
    path: '/auth',
    component: Auth,
  },
  {
    path: '/recipes',
    component: Recipes,
  },
  {
    path: '/shopping-list',
    component: ShoppingList,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
