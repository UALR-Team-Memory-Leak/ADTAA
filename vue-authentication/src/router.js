import {createRouter, createWebHistory } from 'vue-router';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import HomePage from './pages/HomePage.vue';
import GeneratePage from './pages/GeneratePage.vue';

const routes = [
    { path: '/login', component: Login},
    { path: '/register', component: Register},
    { path: '/homepage', component: HomePage},
    { path: '/generatepage', component: GeneratePage},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;