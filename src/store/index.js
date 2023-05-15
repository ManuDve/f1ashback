import { createStore } from 'vuex'

export default createStore({
  state: {
    carreras: null,
    standings: null,
    carreraSiguiente: null,
    ano: null,
  },
  getters: {
  },
  mutations: {
    cargarCarreras(state, payload) {
      state.carreras = payload
    },
    cargarStandings(state, payload) {
      state.standings = payload
    },
    cargarCarreraSiguiente(state, payload) {
      state.carreraSiguiente = payload
    },
    cargarAno(state, payload) {
      state.ano = payload;
    }
  },
  actions: {
    async cargarFechas({commit}) {
      let promesa = await fetch('https://ergast.com/api/f1/current.json')
      let datos = await promesa.json();
      let fechas = await datos.MRData.RaceTable.Races
      commit('cargarCarreras', fechas)
    },
    async cargarStandings({commit}){
      let promesa = await fetch ('https://ergast.com/api/f1/2023/driverStandings.json')
      let datos = await promesa.json();
      let stands = await datos.MRData.StandingsTable.StandingsLists[0]
      commit('cargarStandings', stands)
    },
    async cargarCarreraSiguiente({commit}){
      let promesa = await fetch ('https://ergast.com/api/f1/current/next.json')
      let datos = await promesa.json();
      let siguiente = await datos.MRData.RaceTable
      commit('cargarCarreraSiguiente', siguiente)
    },
    async cargarAno({commit}, payload){
      let base =  'https://ergast.com/api/f1/'
      let year = payload;
      let url  = base + year + '/driverStandings.json'
      let promesa = await fetch(url)
      let datos = await promesa.json()
      let standings = await datos.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      commit('cargarAno', standings)
    }
  },
  modules: {
  }
})
