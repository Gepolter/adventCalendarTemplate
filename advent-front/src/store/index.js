import axios from 'axios'
import { createStore } from 'vuex'
import moment from 'moment'
import {lowerCaseIncludes} from './helper'
import userData from './dataSchema'

//import skillsMod from './modules/skillsMod'

export default createStore({
  
  state: {
    data: userData,
    test:["a", "b"],
    showtime: false,
    // Set this to moment() for a normal day-check
    day: moment(new Date("12.12.2022")),
    account: {
      _people: [
        {
          _name: "Gifted user's name",
          _clicks: 0,
          _person_id: '637a2381d9a21a0e68e29329'
        },
        {
          _name: "Gifting user's Name",
          _clicks: 0,
          _person_id: '637a23a9d9a21a0e68e2932a'
        }
      ]
    },
    //these have to be reactive to login data later
    accountId: '637a1de1d9a21a0e68e29328',
    User1Id: '637a2381d9a21a0e68e29329',
    User2Id: '637a23a9d9a21a0e68e2932a',
  },
  getters: {
    getData: (state) => state.data.userData.calendar_content,
    getShowtime: (state) => state.showtime,
    getDay: (state) => state.day,
    getAccount: (state) => state.account,
    //getDomClick: (state) => state.domClick,
    //getAnnaClick: (state) => state.annaClick,
  },
  mutations: {
    SET_SHOWTIME(state, newShowtime){
      state.showtime = newShowtime
    },
    SET_DATA(state, data){
      state.data = data
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
      state.account._people.find((e) => e._person_id == idPerson)._clicks++

      //implementation for backend
      /*
      try{
        const increment = axios.put('http://localhost:3051/advent/clickInc/id/' + state.account._id + '/person/' + idPerson)
        console.log("get req fired")

      }catch(err){
        console.log(err)
      }
      */
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
      let loginStr = "id/" + 
        this.state.userData.account.accountID +
        "/pw/" + this.state.account.accountPW

      try {
        const account = await axios.get(
          'http://localhost:3051/advent/' + loginStr
          )
          commit('SET_ACCOUNT', account.data)
          
      }
      catch (error) {
        alert (error)
        console.log(error)
      }
    },

  },
})
