// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import smoothScroll from 'vue-smoothscroll';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(smoothScroll);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
