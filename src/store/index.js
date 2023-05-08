import { createStore } from 'vuex'

export default createStore({
  state: {
    carreras: null,
    standings: null
  },
  getters: {
  },
  mutations: {
    cargarCarreras(state, payload) {
      state.carreras = payload
    },
    cargarStandings(state, payload) {
      state.standings = payload
    }
  },
  actions: {
    async cargarFechas({commit}) {
      let promesa = await fetch('https://ergast.com/api/f1/current.json')
      let datos = await promesa.json();
      let fechas = await datos.MRData.RaceTable.Races
      console.log(fechas)
      commit('cargarCarreras', fechas)
    },
    async cargarStandings({commit}){
      let promesa = await fetch ('https://ergast.com/api/f1/2023/driverStandings.json')
      let datos = await promesa.json();
      let stands = await datos.MRData.StandingsTable.StandingsLists[0]
      console.log(stands)
      commit('cargarStandings', stands)
    }
  },
  modules: {
  }
})
