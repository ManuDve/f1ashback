import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@/assets/main.css'

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(far)
library.add(fas)


createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
