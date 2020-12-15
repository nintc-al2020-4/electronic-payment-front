import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// Routing

import { createRouter, createWebHistory } from 'vue-router'

import Home from "./components/pages/Home";
import Charge from "./components/pages/Charge";
import Pay from "./components/pages/Pay";
import Wallet from "./components/pages/Wallet";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        }, {
            path: '/charge',
            name: 'charge',
            component: Charge
        }, {
            path: '/pay',
            name: 'pay',
            component: Pay
        }, {
            path: '/wallet',
            name: 'wallet',
            component: Wallet
        }, {
            path: '/:pathMatch(.*)*',
            name: 'NotFound'
        }
    ]
})

app.use(router)
app.mount('#app')
