import Vue from 'vue';
import Vuesax from 'vuesax';
import router from './router';
import App from './App.vue';
import * as firebase from 'firebase/app'

import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';
import './assets/scss/app.scss'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
}

firebase.initializeApp(firebaseConfig)

Vue.use(Vuesax);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');