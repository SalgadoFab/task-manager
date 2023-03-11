import Vue from 'vue';
import Vuesax from 'vuesax';
import router from './router';
import App from './App.vue';

import './assets/scss/app.scss'
import 'vuesax/dist/vuesax.css'; 

Vue.use(Vuesax);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');