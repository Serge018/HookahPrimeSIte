// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import "normalize.css";
import "./assets/css/fonts.css";
import "./assets/css/global.css";


import store from './store/store';


Vue.config.productionTip = false
// const eventBus = new Vue();
// Vue.prototype.$bus = eventBus;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
});
