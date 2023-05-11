import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ListForm from '../views/ListForm.vue'
import CustomForm from '../views/CustomForm.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ListForm',
    component: ListForm
  },
  {
    path: '/form/:id',
    name: 'NewForm',
    component: CustomForm
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
