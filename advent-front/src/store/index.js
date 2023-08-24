import axios from 'axios'
import { createStore } from 'vuex'
import moment from 'moment'
import {lowerCaseIncludes} from './helper'

//import skillsMod from './modules/skillsMod'

export default createStore({
  
  state: {
    test:["a", "b"],
    showtime: false,
    day: moment(new Date("12.12.2022")),
    account: Object,
    //these have to be reactive to login data later
    accountId: '637a1de1d9a21a0e68e29328',
    annaId: '637a2381d9a21a0e68e29329',
    domId: '637a23a9d9a21a0e68e2932a',
  },
  getters: {
    getData: (state) => state.data,
    getShowtime: (state) => state.showtime,
    getDay: (state) => state.day,
    getAccount: (state) => state.account,
    //getDomClick: (state) => state.domClick,
    //getAnnaClick: (state) => state.annaClick,
  },
  mutations: {
    SET_DATA(state, data){
      state.data = data
    },
    SET_SHOWTIME(state, newShowtime){
      state.showtime = newShowtime
    },
    SET_DAY(state, day){
      state.day = day
    },
    SET_ACCOUNT(state, account){
      state.account = account
    },
    SET_COUNTER(state, idPerson){
      /*
      state.account._people.forEach(person => {

        if(person._person_id == idClicks.id){
          person._clicks = idClicks.clicks
        }
      });*/
      console.log("store counter fired")
      try{
        const increment = axios.put('http://localhost:3051/advent/clickInc/id/' + state.account._id + '/person/' + idPerson)
        console.log("get req fired")

      }catch(err){
        console.log(err)
      }
    }
    /*
    SET_DOM_COUNT(state, domClick){
      state.domClick = domClick
    },
    SET_ANNA_COUNT(state, annaClick){
      state.annaClick = annaClick
    }*/
  },
  actions: {
    setBuilds({ commit}, newBuilds) {
      commit("SET_BUILDS", newBuilds)
    },

    setShowtime({commit}, newShowtime){
      commit("SET_SHOWTIME", newShowtime)
    },
    
    setDay({commit}, newDay){
      commit("SET_DAY", newDay)
    },
    setCounter({commit}, idPerson){
      commit("SET_COUNTER", idPerson)
    },
    /*
    setCounters({commit}, newCounters){
      commit("SET_DOM_COUNT", newCounters[0])
      commit("SET_ANNA_COUNT", newCounters[1])
    },
    */
    async fetchAccount({commit}) {
      try {
        const account = await axios.get('http://localhost:3051/advent/id/637a1de1d9a21a0e68e29328')///account/accountAll
          commit('SET_ACCOUNT', account.data)
          
      }
      catch (error) {
        alert (error)
        console.log(error)
      }
    },
    
    
    /*
    async fetchCounters({commit}) {
      try {
        const counters = await axios.get('http://localhost:3051/advent/CountersAll')
        console.log(counters.data[0])
        commit('SET_DOM_COUNT', counters.data[0])
        commit('SET_ANNA_COUNT', counters.data[1])
          
      }
      catch (error) {
        alert (error)
        console.log(error)
      }
    },
    async putCounter(counterId, newAmount) {
      try{
        await axios.put('http://localhost:3051/counters/' + counterId, newAmount)
      }
      catch (error){
        alert (error)
        console.log(error)
      }
    }*/
    
  },
  //not working 
  modules: {
    //skillsMod: skillsMod
  },
})
