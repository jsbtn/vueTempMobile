import Vue from 'vue'
import Vuex from 'vuex'
import { getToken,setToken } from '@/utils/cookie';
import { login } from '@/api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appList: { //app列表
      'banxue': {
        apk: "http://phpapi.wwwwwedu.com/index/index/downloadApk?type=1",
        ios: "https://apps.apple.com/cn/app/id1518447455",
        name:"办学人",
        icon:"",
      },
      'teacher': {
        apk: "http://phpapi.wwwwwedu.com/index/index/downloadApk?type=2",
        ios: "https://apps.apple.com/cn/app/id1519707666",
        name:"教师",
        icon:"",
      }
    },
    token:getToken()
  },
  mutations: {
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
      setToken(token)
    },
  },
  actions: {
    setUserinfo({ commit }, info) {
      commit('SET_USERINFO', info);
    },
    setToken({ commit }, token) {
      commit('SET_TOKEN', token);
    },
    login({commit},userinfo){
      // console.log(userinfo)
      return new Promise((resolve, reject) => {
        login({...userinfo}).then((res) => {
          if(res.code == 200 ){
            commit('SET_TOKEN', res.data.token);
            resolve(res)
          }else{
            reject(res)
          }
        }).catch((err) => {
          reject(err)
        })
      })
    }
  },
  getters:{
    token:state => state.token
  } 
})
