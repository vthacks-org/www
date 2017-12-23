// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import smoothScroll from 'vue-smoothscroll';
import VueAnalytics from 'vue-analytics';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(smoothScroll);
Vue.use(VueAnalytics, {
  id: 'UA-107929421-1',
  checkDuplicatedScript: true,
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
