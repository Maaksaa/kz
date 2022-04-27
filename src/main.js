import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";

import Navbar from "./components/Navbar";

Vue.component("app-navbar", Navbar);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.use(Vuelidate);


new Vue({
  // tom,
  render: (h) => h(App),
}).$mount("#app");

// var app = new Vue({
//   el: '#app',
//   data: {
//     // user,
//   }
// })
