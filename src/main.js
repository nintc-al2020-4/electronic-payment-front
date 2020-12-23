import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'

const app = createApp(App)

// Store

const store = createStore({
    state () {
        return {
            balance: 0
        }
    },
    mutations: {
        setBalance (state, balance) {
            state.balance = balance;
        }
    },
    actions: {
        async retrieveBalance (context) {
            const axiosBase = require('axios');
            const axios = axiosBase.create({
                baseURL: 'https://api.crow31415.net',
                headers: {
                    'Content-Type': 'application/json',
                },
                responseType: 'json'
            });

            let balance = 0;
            await axios.get('/balance').then(responce => {
                balance = responce.data.balance;
            }).catch(err => {
                console.log(err);
            })
            context.commit('setBalance', balance);
        }
    }
})
app.use(store)

// Routing

import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/components/pages/Home";
import Charge from "@/components/pages/Charge";
import Pay from "@/components/pages/Pay";
import Wallet from "@/components/pages/Wallet";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            meta: {title: "トップページ", description: ""}
        }, {
            path: '/charge',
            name: 'charge',
            component: Charge,
            meta: {title: "チャージ", description: ""}
        }, {
            path: '/pay',
            name: 'pay',
            component: Pay,
            meta: {title: "お支払い", description: ""}
        }, {
            path: '/wallet',
            name: 'wallet',
            component: Wallet,
            meta: {title: "残高", description: ""}
        }, {
            path: '/:pathMatch(.*)*',
            name: 'NotFound'
        }
    ]
})

app.use(router)
app.mount('#app')
