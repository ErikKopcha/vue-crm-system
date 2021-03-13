import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import timeFilter from "@/filters/time.filter";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min"

Vue.config.productionTip = false;
Vue.filter('date', dateFilter);
Vue.filter('time', timeFilter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
