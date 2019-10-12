import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import {router} from "./router"


Vue.use(Vuex);

const store = new Vuex.Store({

    state : {
      weather : "",
      forecast : ""
    },

    getters : {


    },

    mutations : {

      getLocation(state,data) {
        state.weather = data;

        setTimeout(()=> {
          axios.patch("https://weather-appp.firebaseio.com/weather.json", state.weather)
            .then(response => {
              console.log(response)
            });
        },1000)

      },


    },

    actions : {

    }


});



export default store
