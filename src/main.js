import Vue from 'vue';
import Vuesax from 'vuesax';
import router from './router';
import store from './store'; 
import App from './App.vue';
import { auth } from './firebase'

import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';
import './assets/scss/app.scss'

Vue.use(Vuesax);

Vue.config.productionTip = false;

let app
auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
  console.log(user)
  if (user) {
    store.dispatch('fetchCurrentUser', user)
  }
})