/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import routes from './route';
import Le from '../src/index';
import locale from '../src/locale/lang/zh-CN';

Vue.use(VueRouter);
Vue.use(Le, {
  locale
});

import '../src/styles/index.less'

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
  base: __dirname,
  routes
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
