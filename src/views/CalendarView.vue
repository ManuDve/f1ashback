<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div v-if="!carreras" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="accordion accordion-flush" id="accordion">
  <div v-for="carrera in carreras" :key="carrera.id" class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#n' + carrera.round" aria-expanded="false" :aria-controls="'n' + carrera.round">
        <div class="dflex" :class="{tachado: compararFechas(hoyDia, carrera.date)}">
          <div>{{carrera.raceName}}</div>
          <div>{{ cambiarFecha(carrera.date) }}</div>
        </div>
          
      </button>
    </h2>
    <div :id="'n' + carrera.round" class="accordion-collapse collapse" data-bs-parent="#accordion">
      <div class="accordion-body">
        <p>Horario: {{ carrera.time }}</p>
        <p>País: {{carrera.Circuit.Location.country}}</p>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  data() {
    return {
      hoyDia: null
    }
  },
  methods: {
    cambiarFecha(fecha){
    return fecha.split('-').reverse().join("/")
  },
    compararFechas(actual, proxima) {
      let fechaActual = actual.split("/").join("");
      let fechaProxima = proxima.split("-").join("")
      console.log()
      return fechaActual > fechaProxima
    }
  },
  computed: {
    ...mapState(['carreras']),
  },
  created() {
    let diaActual = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    this.hoyDia = diaActual;
  }
}

</script>

<style scoped>

.dflex {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 1em;
}
.accordion {
  --bs-accordion-bg: var(--main-bg);
  --bs-accordion-btn-color: var(--main-color);
  --bs-accordion-btn-icon: url("data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill='%23fff'><path fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/></svg>");
  --bs-accordion-btn-active-icon: url("data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23d50000%27><path fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/></svg>");
  margin-top: 1em;
}

/* Remueve estilos accordion */
.accordion-item {
  border: none;
}

.accordion-button, .accordion-button:focus, .accordion-button:not(.collapsed){
  border: none;
  box-shadow: none;
  border-bottom: 1px solid var(--main-color-dark);
}

/* Reemplaza colores */

.accordion-button:not(.collapsed) {
  background-color: var(--main-bg-dark);
}
.accordion-button:not(.collapsed)::after {
    background-image: var(--bs-accordion-btn-active-icon);
}
.accordion-item, .accordion-button, .accordion-button:focus {
  color: var(--main-color);
}
.accordion-button:focus, .accordion-button:not(.collapsed) {
  color: var(--main-active);
}

.tachado {
  text-decoration-line: line-through;
  color: var(--main-color-dark)
}

</style>
