const types = {
  SAMPLE: 'sample/SAMPLE',
};

const state = {
  isSample: false,
};

const getters = {
  /* eslint-disable no-shadow, no-param-reassign */
  getSampleState: state => state.isSample,
};

const actions = {
  actionSample({ commit }, condition) {
    commit(types.SAMPLE, condition);
  },
};

const mutations = {
  [types.SAMPLE](state, condition) {
    state.isSample = condition;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
