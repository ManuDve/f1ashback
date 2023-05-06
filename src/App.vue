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
    ...mapActions(['cargarFechas']),
  },
  async created() {
    await this.cargarFechas;
  }
}
</script>
