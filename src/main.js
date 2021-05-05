import Vue from "vue";

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

import App from "./App.vue";
import router from "./router";
import store from "./store";
import Loader from '@/components/app/Loader';
import dateFilter from "@/filters/date.filter";
import timeFilter from "@/filters/time.filter";
import currencyFilter from "@/filters/currency.filter";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min.js";
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.filter('date', dateFilter);
Vue.filter('time', timeFilter);
Vue.filter('currency', currencyFilter);
Vue.component('Loader', Loader);

firebase.initializeApp({
  apiKey: "AIzaSyCO0qS-2XuQBF9COQzpJcsNLpe106Hk1PI",
  authDomain: "wallet-management-7ef1c.firebaseapp.com",
  databaseURL: "https://wallet-management-7ef1c-default-rtdb.firebaseio.com/",
  projectId: "wallet-management-7ef1c",
  storageBucket: "wallet-management-7ef1c.appspot.com",
  appId: "wallet-management-7ef1c"
});

let app = null;

// якщо знайде дані користувача, або ні
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
