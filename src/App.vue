<template>
  <NavBar />
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
  <FooterBar/>
</template>


<script>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'

import { mapActions } from 'vuex'

export default {
  components: {
    NavBar,
    FooterBar
  },
  computed: {
    ...mapActions(['cargarFechas', 'cargarStandings', 'cargarCarreraSiguiente']),
  },
  methods: {
    ...mapActions(['cargarAno']),

  },
  async created() {
    await this.cargarFechas;
    await this.cargarStandings;
    await this.cargarCarreraSiguiente
    await this.cargarAno('2023');
  }
}
</script>

<style>

main {
  min-height: 75vh;
}

.v-enter-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
