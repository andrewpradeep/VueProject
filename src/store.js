import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: { // data in component
    count : 1
  },
  getters : { // compueted in component
    getCountValue(state, getters){
      return 'Count'+ state.count;
    },
    getMyValue(state){
      return (value)=>{
        'Count'+ state.count
      }
    }
  },
  mutations: { // sync method in component
    incrementBy2(state){
      state.count+=2;
    },
    decrementBy2(state){
      state.count-=2;
    },
    multiplyBy2(state){
      state.count*=2;
    },
    divideBy2(state){
      state.count/=2;
    }
  },
  actions: { // async method in component
    setAfter5Sec(store){
      window.setTimeout(()=>{
        store.commit('incrementBy2');
      },5000);
    }
  }
});

// let substore= {
//   namespaced: true,
//   state : {
//     content: ''
//   },
//   mutations :{
//     append(){

//     }
//   }
// }
// store.registerModule('substore', substore);

export default store;
