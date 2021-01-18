import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/pages/Home'
import Charge from '@/components/pages/Charge'
import Pay from '@/components/pages/Pay'
import Wallet from '@/components/pages/Wallet'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'トップページ', description: '' }
    },
    {
      path: '/charge',
      name: 'charge',
      component: Charge,
      meta: { title: 'チャージ', description: '' }
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay,
      meta: { title: 'お支払い', description: '' }
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: Wallet,
      meta: { title: '残高', description: '' }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound'
    }
  ]
})

export default router
