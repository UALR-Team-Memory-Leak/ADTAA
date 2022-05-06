import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import LoginValidations from './services/LoginValidations';

const app= createApp(App);
app.use(router);
app.use(new LoginValidations);
app.mount('#app');