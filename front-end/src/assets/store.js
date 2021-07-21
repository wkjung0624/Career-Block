import {
  createStore
} from "vuex";

import persistedstate from "vuex-persistedstate";

const store = createStore({
  state() {
    return {
      user: {},
      reg: {
        agree_1 : false,
        agree_2 : false,
        name : '',
        gender : 0,
        year : '',
        month : '',
        day : '',
        phone : '',
        address : '',
      },
      currentPage: 0,
    };
  },
  mutations: {
    user(state, data) {
      state.user = data;
      state.user.isRegister = false;
    },
    Registration(state, data){
      for(var key of Object.keys(data)){
        state.reg[key] = data[key]
      }
      state.user.isRegister = true;
    },
    setPageIndex(state, data) {
      console.log("test", data);
      state.currentPage = data;
    },
    isEditable(state, author){
      console.log("isEditable=", author)
      return (state.user.email == author)
    }
  },
  plugins: [
    persistedstate({
      paths: ["user"],
    })
  ]
})

export default store;