
import { createRouter, createWebHistory } from 'vue-router'
import { LoginCallback, navigationGuard } from '@okta/okta-vue'
import HomeComponent from '@/components/Home'
import ProfileComponent from '@/components/Profile'
import MessagesComponent from '@/components/Messages'
import AgTable from '@/components/AgTable'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeComponent
    },
    {
      path: '/login/callback',
      component: LoginCallback
    },
    {
      path: '/profile',
      component: ProfileComponent,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/messages',
      component: MessagesComponent,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/table',
      component: AgTable,
      meta:{
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach(navigationGuard)

export default router
