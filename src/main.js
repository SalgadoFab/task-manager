import Vue from 'vue';
import Vuesax from 'vuesax';
import router from './router';
import userStore from './stores/userStore'; 
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
      userStore,
      render: h => h(App)
    }).$mount('#app')
  }
  if (user) {
    userStore.commit('setLoading', false);
    userStore.commit('setSuccess', true);
    userStore.dispatch('fetchCurrentUser', user)
  }
})