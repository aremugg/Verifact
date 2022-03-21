import { createStore } from 'vuex'

import modules from "./modules";

export default createStore({
  modules,
  state: {
  },
  getters: {
    getToken: () => {
      return localStorage.token;
    },
  },
  mutations: {
  },
  actions: { see() {
      // console.log("test");
    }
  },
  strict: process.env.NODE_ENV !== "production"
})

