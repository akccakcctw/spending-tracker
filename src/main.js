// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueHead from 'vue-head';
import VeeValidate, { Validator } from 'vee-validate';
import axios from 'axios';
import VueAxios from 'vue-axios';
import ElementUI from 'element-ui';
import App from './App';
import router from './router';
import store from './store';
import validatorDict from './validate';
// custom js
// import './js/main.js';
// custom style
// import './sass/main.scss';

Vue.config.productionTip = false;

const veeConfig = {
  fieldsBagName: 'v-fields', // 'fields' conflict with ElementUI
};

Vue.use(VueHead);
Vue.use(VeeValidate, veeConfig);
Vue.use(VueAxios, axios);
Vue.use(ElementUI);

// 表單驗證
Validator.updateDictionary(validatorDict);
Validator.setLocale('zh_TW');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCAzwt7bP4O4ad2oeMcBsD0VPy7Xb-aWSA',
  authDomain: 'spending-tracker-38aea.firebaseapp.com',
  databaseURL: 'https://spending-tracker-38aea.firebaseio.com',
  projectId: 'spending-tracker-38aea',
  storageBucket: 'spending-tracker-38aea.appspot.com',
  messagingSenderId: '945969104199',
};
firebase.initializeApp(config);
const db = firebase.firestore();

export default db;
