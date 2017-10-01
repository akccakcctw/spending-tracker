import Vue from 'vue';
import Vuex from 'vuex';
// root
import { state, actions, mutations } from './root';
import * as getters from './getters';
// modules
import sample from './modules/sample';

Vue.use(Vuex);

export default new Vuex.Store({
  // root
  state,
  actions,
  mutations,
  getters,
  modules: {
    sample,
  },
  // strict mode
  strict: true,
});
