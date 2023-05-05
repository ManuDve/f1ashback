import { createStore } from 'vuex'

export default createStore({
  state: {
    carreras: null
  },
  getters: {
  },
  mutations: {
    cargarCarreras(state, payload) {
      state.carreras = payload
    }
  },
  actions: {
    async cargarFechas({commit}) {
      let promesa = await fetch('https://ergast.com/api/f1/current.json')
      let fechas = await promesa.json();
      commit('cargarCarreras', fechas.MRData.RaceTable.Races)
    }
  },
  modules: {
  }
})
