import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {SOME_MUTATION} from "./mutation-type";

const store = new Vuex.Store({
  state: {
    count: 0,
    name: 'store',
    person: {
      name: 'jack',
      country: ''
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    //传入一个简单的参数
    incrementN(state,n) {
      state.count -= n;
    },
    //传入一个对象
    incrementObj(state,payload) {
      state.count -= payload.amount;
    },
    //使用常量替代mutation的事件类型
    [SOME_MUTATION](state,payload) {
      state.person.country = payload.country;
    }

  }
})

store.commit('increment')

console.log(store.state.count)

export default store

