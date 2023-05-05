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
      let datos = await promesa.json();
      let fechas = await datos.MRData.RaceTable.Races
      console.log(fechas)
      commit('cargarCarreras', fechas)
    }
  },
  modules: {
  }
})
