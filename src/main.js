// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router'
import { routes } from './routes';

import VueResource from 'vue-resource'

Vue.use(BootstrapVue)
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "http://localhost:3000/memories";

const router = new VueRouter({
  mode: 'history',
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
