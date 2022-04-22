import Vue from 'vue'
import  BootstrapVue  from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'

import AppUsers from './components/AppUsers'
import Navbar from './components/Navbar'

Vue.component("app-users", AppUsers)
Vue.component("app-navbar", Navbar)


Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.use(Vuelidate)


new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')

