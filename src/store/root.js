import * as types from './mutation-types';

export const state = {
  loading: false,
  token: localStorage.getItem('token') || '',
  user: JSON.parse(localStorage.getItem('user')) || null,
};

export const actions = {
  toggleLoading({ commit }, isLoading) {
    commit(types.LOADING, isLoading);
  },
  actionLogin({ commit }, { email, password }) {
    commit(types.LOADING, true);
    return new Promise((resolve, reject) => {
      if (email && password) {
        firebase.auth()
          .signInWithEmailAndPassword(email, password)
          .then((user) => {
            // sessionStroage
            localStorage.setItem('token', '3345678');
            localStorage.setItem('user', JSON.stringify(user));
            resolve();
          })
          .catch((err) => { throw err; });
        this.dispatch('actionAuthStateObserver');
      } else {
        commit(types.LOADING, false);
        reject();
      }
    });
  },
  actionSignOut() {
    firebase.auth()
      .signOut()
      .then(() => {
        // clear sessionStroage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      })
      .catch((err) => { throw err; });
    this.dispatch('actionAuthStateObserver');
  },
  actionAuthStateObserver({ commit }) {
    firebase.auth()
      .onAuthStateChanged((user) => {
        if (user) {
          // user logged in
          commit(types.USER, user);
          commit(types.TOKEN, '3345678');
          commit(types.LOADING, false);
        } else {
          // user signed out
          commit(types.USER, null);
          commit(types.TOKEN, '');
        }
      });
  },
};

export const mutations = {
  /* eslint-disable no-shadow, no-param-reassign */
  [types.LOADING](state, isLoading) {
    state.loading = isLoading;
  },
  [types.TOKEN](state, token) {
    state.token = token;
  },
  [types.USER](state, user) {
    state.user = user;
  },
};
