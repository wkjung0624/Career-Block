import {
  createStore
} from "vuex";

import persistedstate from "vuex-persistedstate";

const store = createStore({
  state() {
      return {
          user: {},
      };
  },
  mutations: {
      user(state, data) {
          state.user = data;
          state.user.isRegister = false;
      },
      Regf(state){
        state.user.isRegister = false;
      },
      Regt(state){
        state.user.isRegister = true;
      }
  },
  plugins: [
      persistedstate({
          paths: ["user"],
      })
  ]
})

export default store;