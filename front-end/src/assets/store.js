import {
  createStore
} from "vuex";

import persistedstate from "vuex-persistedstate";

const store = createStore({
  state() {
      return {
          user: {},
          currentPage: 0,
      };
  },
  mutations: {
      user(state, data) {
          state.user = data;
          state.user.isRegister = false;
      },
      setPageIndex(state, data){
          console.log("test", data);
          state.currentPage = data;
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