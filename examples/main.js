import Vue from 'vue';
import Floating from 'vue-floating';
import App from './App.vue';

Vue.use(Floating);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
