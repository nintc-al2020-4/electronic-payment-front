import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/pages/Home'
import Login from '@/components/pages/Login'
import Wallet from '@/components/pages/Wallet'
import Charge from '@/components/pages/Charge'
import Pay from '@/components/pages/Pay'
import Histories from '@/components/pages/Histories'

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
      path: '/login',
      name: 'login',
      component: Login,
      meta: { title: 'ログイン', description: '' }
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: Wallet,
      meta: { title: '残高', description: '' }
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
      path: '/histories',
      name: 'histories',
      component: Histories,
      meta: { title: '決済履歴', description: '' }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound'
    }
  ]
})

export default router
