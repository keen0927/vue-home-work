import Vue from 'vue';
import Vuex from 'vuex';
import Constants from '../Constants';
import _ from 'lodash';

Vue.use(Vuex);

const store = new Vuex.store({
    state: {
      currentRegion: 'all',
      conutries: {
        currentRegion: 'all',
        countries: [
          {no:1, name: '미국', capital: 'DC', region:'america'},
          {no:2, name: '프랑스', capital: '파리', region:'europe'},
          {no:3, name: '스위스', capital: '취리히', region:'europe'},
          {no:4, name: '한국', capital: '서울', region:'asia'},
          {no:5, name: '일본', capital: '도쿄', region:'asia'},
        ]
      }
    },
    getters: {
      countriesByRegion(state) {
        if (state.currentRegion == "all") {
          return state.countries;
        } else {
          return state.countries.filter(c => c.region == state.currentRegion)
        }
      },
      regions(state) {
        var temp = state.countries.map((c) => c.region);
        temp = _.uniq(temp);
        temp.splice(0,0, "all");
        return temp;
      },
      currentRegion(state) {
        return state.currentRegion;
      }
    },
    mutations: {
      [Constants.CHANGE_REGION] : (state, payload) => {
        state.currentRegion = payload.region;
      }
    }
});

export default store;