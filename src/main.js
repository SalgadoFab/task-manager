import Vue from 'vue';
import Vuesax from 'vuesax';
import router from './router';
import store from './store'; 
import App from './App.vue';

import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';
import './assets/scss/app.scss'

Vue.use(Vuesax);

Vue.config.productionTip = false;

new Vue({
  router,
  store, // Pasando store como opción
  render: (h) => h(App),
}).$mount('#app');