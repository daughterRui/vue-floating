// 引入组件
import Floating from './src/Floating.vue';

Floating.install = Vue => Vue.component(Floating.name, Floating.default);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Floating);
}

export default Floating;
