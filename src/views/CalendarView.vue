<template>
  <section class="container">
    <div class="d-flex justify-content-center">
      <div v-if="!carreras" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="accordion accordion-flush"  id="accordion">
      <div v-for="carrera in carreras" :key="carrera.id" class="accordion-item" :class="compararFechas(hoyDia, carrera.date) ? 'tachado' : 'normal' ">
        <h2 class="accordion-header" >
          <button class="accordion-button collapsed px-0 px-sm-5" type="button" data-bs-toggle="collapse"
            :data-bs-target="'#n' + carrera.round" aria-expanded="false" :aria-controls="'n' + carrera.round">
            <div class="dflex"> 
              <div>{{ carrera.raceName }} <span v-if="carreraSiguiente && carreraSiguiente.round == carrera.round" class="alerta">NEXT</span></div>
              <div>{{ cambiarFecha(carrera.date) }}</div>
            </div>
          </button>
        </h2>
        <div :id="'n' + carrera.round" class="accordion-collapse collapse" data-bs-parent="#accordion">
          <div class="accordion-body">
            <p>Horario: {{ carrera.time }}</p>
            <p>País: {{ carrera.Circuit.Location.country }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { mapState } from 'vuex'

export default {
  data() {
    return {
      hoyDia: null,
    }
  },
  methods: {
    cambiarFecha(fecha) {
      return fecha.split('-').reverse().join("/")
    },
    compararFechas(actual, proxima) {
      let fechaActual = actual.split("/").join("");
      let fechaProxima = proxima.split("-").join("")
      return fechaActual > fechaProxima
    },
/*     siguienteCarrera() {
      if (this.carreras && this.hoyDia) {
        let fechaActual = this.hoyDia.split("/").join("");
        this.carreras.forEach(element => {
        let fechaProxima = element.date.split("-").join("")
        if (fechaActual > fechaProxima) {
          return fechaProxima
        }
      });
      } 
    } */
  },
  computed: {
    ...mapState(['carreras', 'carreraSiguiente']),
  },
  created() {
    let diaActual = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    this.hoyDia = diaActual;
  },
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
  --bs-accordion-btn-icon: var(--acc-normal);
  --bs-accordion-btn-active-icon: var(--acc-active);
  margin-top: 1em;
}

/* Remueve estilos accordion */

.accordion-item {
  border: none;

}

.accordion-button,
.accordion-button:focus,
.accordion-button:not(.collapsed) {
  border: none;
  box-shadow: none;
  border-bottom: 1px solid var(--main-color-dark);
}

/* Ya fue*/ 

.tachado  > h2 > button > .dflex {
  text-decoration-line: line-through;
  color: var(--main-color-dark)
}

/* Carrera siguiente */ 

.tachado + .normal > h2 > button > .dflex > div {
  color: var(--secondary-color);
}

.alerta{
  display: inline;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.6rem;
  margin-left: 1em;
  border-radius: 4px;
  text-align: center;
  color: var(--secondary-color);
  border: 1px solid var(--secondary-color);
  padding: 3px 10px;
}

.tachado + .normal > h2 > .accordion-button:not(.collapsed)::after {
  --bs-accordion-btn-active-icon: var(--acc-golden);
}

/* Reemplaza colores */

.accordion-button:not(.collapsed) {
  background-color: var(--main-bg-dark);
}

.accordion-button:not(.collapsed)::after {
  background-image: var(--bs-accordion-btn-active-icon);
}

.accordion-item,
.accordion-button,
.accordion-button:focus {
  color: var(--main-color);
}


.accordion-button:not(.collapsed) {
  color: var(--main-active);
}

.accordion-button {
  font-style: italic;
  letter-spacing: 0.3px;
  font-weight: 500;
}
</style>
