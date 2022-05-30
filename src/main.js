import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from "vue-router";
import Routes from './routes'

Vue.use(VueRouter)

//can no make new files so can't finish the routes thingy
const router = new VueRouter({
  routes: Routes
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router: router
}).$mount('#app')
