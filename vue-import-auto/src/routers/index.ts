import { createMemoryHistory, createRouter } from 'vue-router'

import demo1 from '../components/demo1.vue'
import demo2 from '../components/demo2.vue'

const routes = [
  { path: '/demo1', component: demo1, name: 'demo1' },
  { path: '/demo2', component: demo2, name: 'demo2' },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router