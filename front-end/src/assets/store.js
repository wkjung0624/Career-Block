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
    setPageIndex(state, data) {
      console.log("test", data);
      state.currentPage = data;
    },
  },
  plugins: [
    persistedstate({
      paths: ["user"],
    })
  ]
})

export default store;