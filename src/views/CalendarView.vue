<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div v-if="!carreras" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="accordion accordion-flush" id="accordionFlushExample">
  <div v-for="carrera in carreras" :key="carrera.id" class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#n' + carrera.round" aria-expanded="false" :aria-controls="'n' + carrera.round">
        {{carrera.raceName}}
      </button>
    </h2>
    <div :id="'n' + carrera.round" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>Fecha: {{carrera.date}}</p>
        <p>Horario: {{ carrera.time }}</p>
        <p>País: {{carrera.Circuit.Location.country}}</p>
        <p>Ciudad: {{carrera.Circuit.Location.locality}}</p>

      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {

  computed: {
    ...mapState(['carreras'])
  },
}

</script>

<style scoped>
.accordion {
  --bs-accordion-bg: var(--main-bg);
  --bs-accordion-btn-color: var(--main-color);
  --bs-accordion-btn-icon: url("data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill='%23fff'><path fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/></svg>");
  --bs-accordion-btn-active-icon: url("data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23d50000%27><path fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/></svg>");
  margin-top: 1em;
}


.accordion-button:not(.collapsed) {
  background-color: var(--main-bg-dark);;
}

.accordion-button:not(.collapsed)::after {
    background-image: var(--bs-accordion-btn-active-icon);
}

.accordion-button:not(.collapsed) {
  color: var(--main-active);
}

.accordion-button, .accordion-button:focus {
  color: var(--main-color);
  border-bottom: 1px solid var(--main-color-dark);
}
.accordion-button:focus {
  color: var(--main-active);
  box-shadow: none;
}
.accordion-item  {
  color: var(--main-color);
  border: none;
}

</style>
