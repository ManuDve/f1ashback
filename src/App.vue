<template>
  <NavBar/>
  <router-view></router-view>
</template>


<script>
import NavBar from '@/components/NavBar.vue'

import {mapActions} from 'vuex'

export default {
  components: {
    NavBar
  },
  computed: {
    ...mapActions(['cargarFechas', 'cargarStandings']),
  },
  async created() {
    await this.cargarFechas;
    await this.cargarStandings;
  }
}
</script>
