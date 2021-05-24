
 const { default: VueRouter } = require('vue-router');

require('./bootstrap');

window.Vue = require('vue').default;
import Vue from 'vue';
//import VueRouter from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router:new VueRouter(routes)
});
