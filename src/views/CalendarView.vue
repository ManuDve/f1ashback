<template>
  <main class="container">
    <div class="d-flex justify-content-center">
      <div v-if="!carreras" class="spinner-border" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
    <div class="accordion accordion-flush" id="accordion">
      <div v-for="carrera in carreras" :key="carrera.id" class="accordion-item"
        :class="compararFechas(hoyDia, carrera.date) ? 'tachado' : 'normal'">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed px-0 px-sm-5" type="button" data-bs-toggle="collapse"
            :data-bs-target="'#n' + carrera.round" aria-expanded="false" :aria-controls="'n' + carrera.round">
            <div class="dflex">
              <div class="nombre-carrera">{{ carrera.raceName }} <span
                  v-if="carreraSiguiente && carreraSiguiente.round == carrera.round" class="alerta">NEXT</span></div>
              <div>{{ cambiarFecha(carrera.date) }}</div>
            </div>
          </button>
        </h2>
        <div :id="'n' + carrera.round" class="accordion-collapse collapse" data-bs-parent="#accordion">
          <div class="accordion-body">
            <span class="pais">
              <img class="flag" :src="mostrarPais(carrera.Circuit.Location.country)"> 
              {{ carrera.Circuit.Location.country }}
            </span>
            <div class="accordion-data">
              <div>Primera Práctica </div>
              <div class="hora">
                <div>{{ cambiarHora(carrera.FirstPractice.time) }}</div>
                <div>{{ fechaNominal(carrera.FirstPractice.date) }}</div>
              </div>
            </div>

            <div class="accordion-data">
              <div>Segunda Práctica </div>
              <div class="hora">
                <div>{{ cambiarHora(carrera.SecondPractice.time) }}</div>
                <div>{{ fechaNominal(carrera.SecondPractice.date) }}</div>
              </div>
            </div>
            <div class="accordion-data" v-if="carrera.ThirdPractice">
              <div>Tercera Práctica </div>
              <div class="hora">
                <div>{{ cambiarHora(carrera.ThirdPractice.time) }}</div>
                <div>{{ fechaNominal(carrera.ThirdPractice.date) }}</div>
              </div>
            </div>

            <div class="accordion-data">
              <div>Clasificación </div>
              <div class="hora">
                <div>{{ cambiarHora(carrera.Qualifying.time) }}</div>
                <div>{{ fechaNominal(carrera.Qualifying.date) }}</div>
              </div>
            </div>

            <div class="accordion-data" v-if="carrera.Sprint">
              <div>Sprint </div>
              <div class="hora">
                <div>{{ cambiarHora(carrera.Sprint.time) }}</div>
                <div>{{ fechaNominal(carrera.Sprint.date) }}</div>
              </div>
            </div>

            <div class="accordion-data gp">
              <div>Gran Premio</div>
              <div class="hora">
                <div>{{ cambiarHora(carrera.time) }}</div>
                <div>{{ fechaNominal(carrera.date) }}</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import { mapState } from 'vuex'
import country from "all-country-data";


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
    mostrarPais(nombre) {
      if (nombre == 'USA') {
        return country.searchFlag('United States')[0].flag
      } else if (nombre == 'UAE') {
        return country.searchFlag('Arab Emirates')[0].flag
      } else if (country.searchFlag(nombre)) {
        return country.searchFlag(nombre)[0].flag
      } else {
        return ''
      }
      
    },
    fechaNominal(fecha) {
      let arr = fecha.split('-').reverse()
      const meses = {
        '01': 'Enero',
        '02': 'Febrero',
        '03': 'Marzo',
        '04': 'Abril',
        '05': 'Mayo',
        '06': 'Junio',
        '07': 'Julio',
        '08': 'Agosto',
        '09': 'Septiembre',
        '10': 'Octubre',
        '11': 'Noviembre',
        '12': 'Diciembre',
      }
      return arr[0] + ' de ' + meses[arr[1]]
    },
    compararFechas(actual, proxima) {
      let fechaActual = actual.split("/").join("");
      let fechaProxima = proxima.split("-").join("")
      return fechaActual > fechaProxima
    },
    cambiarHora(hora) {
      return hora.slice(0, 5)
    }
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
main {
  margin-bottom: 2em;
}

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

.tachado>h2>button>.dflex {
  text-decoration-line: line-through;
  color: var(--main-color-dark)
}

/* Carrera siguiente */

.tachado+.normal>h2>button>.dflex>div {
  color: var(--secondary-color);
}

.nombre-carrera {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0 1em;
  flex-wrap: wrap;
}

.alerta {
  display: inline;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.6rem;
  border-radius: 4px;
  text-align: center;
  color: var(--secondary-color);
  border: 1px solid var(--secondary-color);
  padding: 6px 10px 3px 10px;
}

.tachado+.normal>h2>.accordion-button:not(.collapsed)::after {
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

.accordion-body {
  border-bottom: 1px solid var(--main-color-dark);
}

.accordion-data {
  color: var(--main-color-mid);
  font-weight: 300;
  display: flex;
  justify-content: space-between;
}

.hora {
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  gap: 1em;
  min-width: 30%;
}

.gp {
  color: var(--secondary-color);
}

/*  Banderas */

.pais {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .5em;
  margin-bottom: 1em;
}
.flag {
  max-width: 20px;
}

</style>


