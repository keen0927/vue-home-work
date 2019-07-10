import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    allUsers: [
      {id:0, name:'킨1', age:'37'},
      {id:1, name:'킨2', age:'38'},
      {id:2, name:'킨3', age:'39'},
    ]
  },
  getters: {
    allUsersLength: state => {
      return state.allUsers.length
    },
    countOfAge: state => {
      let count = 0;
      state.allUsers.forEach(user => {
        if (user.age === '37') count ++
      })
      return count;
    },
    percentOfSeoul: (state, getters) => {
      return Math.round(getters.countOfAge / getters.allUsersLength * 100)
    }
  },
  mutations: {
    increment: state => state.count ++,
    decrement: state => state.count--
  }
});

export default store;