import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    options: [
      {name: 'Option 1', id: 1},
      {name: 'Option 2', id: 2},
      {name: 'Option 3', id: 3},
      {name: 'Option 4', id: 4},
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
