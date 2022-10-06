import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../src/Pages/Home.vue';
import Portfolio from "../src/Pages/Portfolio.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio }
],
})

createApp(App).use(router).mount('#app')
