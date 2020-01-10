import Home from './components/Home.vue'
import CreateMemory from './components/CreateMemory.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/create', component: CreateMemory },
    { path: '*', redirect: '/' }
];