<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div v-if="!horarios" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="accordion accordion-flush" id="accordionFlushExample">
  <div v-for="carrera in horarios" :key="carrera.id" class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#n' + carrera.race_no" aria-expanded="false" :aria-controls="'n' + carrera.race_no">
        {{carrera.raceName}}
      </button>
    </h2>
    <div :id="'n' + carrera.race_no" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>{{carrera.date}}</p>
        <p>{{carrera.Circuit.Location.country}}</p>

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
