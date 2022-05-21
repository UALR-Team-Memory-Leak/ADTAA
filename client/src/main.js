//import { sync } from 'vuex-router-sync';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import LoginValidations from './services/LoginValidations';
import store from './store';
import axios from 'axios';

//import UserController from '../server/app/Controllers/Http/UserController';
axios.defaults.headers.common['Content-Type'] = 'application/json'
const token = sessionStorage.getItem("token")
if (token) {
  axios.defaults.headers.common.Authorization = 'Bearer ' + token;
}

const app= createApp(App);
//sync(store. router);
app.use(router);
app.use(store);
app.use(new LoginValidations);
//app.use(UserController);
app.mount('#app');