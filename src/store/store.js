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
      country: '',
    },
    array: []
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
    },
    //更改名字(用于异步链式操作)
    changeName(state,payload) {
      state.person.name = payload.name
    },
    //接受一个对象传入state.array
    getObjToArray(state, payload) {
      state.array.push(payload)
    }
  },
  actions: {
    incrementAction(context) {
      context.commit('increment');
    },
    //简写
    incrementNAction({commit}) {
      setTimeout( () => {
        commit('incrementN',6);
      },3000);
    },
    //传递payload的action
    incrementObjAction({commit},payload) {
      commit('incrementObj',payload)
    },
    actionA({commit}) {
      return new Promise( (resolve,reject) => {
        setTimeout( () => {
          commit('SOME_MUTATION',{country: 'Japan'})
          resolve()
        },2000)
      })
    },
    actionB({dispatch,commit}) {
      return dispatch('actionA').then( () => {
        commit('changeName',{name: '矢野浩二'})
        // dispatch('changeNameAction',{name: '矢野浩二'})
      })
    },
    changeNameAction({commit},payload) {
      setTimeout( () => {
        commit('changeName',payload)
      },2000)
    },
    sendActionObjToArray({commit},payload) {
      commit('getObjToArray',payload)
    }

  }
})

store.commit('increment')

console.log(store.state.count)

export default store

