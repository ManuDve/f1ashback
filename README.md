# f1ashback

## Instalación del proyecto
```
npm install
```

### Compilar código para visualización del proyecto
```
npm run serve
```

## Características:

* Maquetación con HTML y CSS
* Uso de Componenetes Vue
* Programación con Javascript ES6
* Consumo, manejo de datos y estados
* Estructura de archivos y carpetas


### 1.Maquetación con HTML y CSS: Uso de Bootstrap y etiquetas semánticas
> Ejemplo: src/view/ErrorView.vue (línea 1)
```html
<template>
    <main class="container mt-5">
        <img src="../assets/sbinalla.jpeg" alt="" class="mb-3">
        <div class="row justify-content-center">
            <div class="col-6">
                <h1 class="text-center">Error 404</h1>
            <a class="btn" @click="$router.go(-1)">Regresar</a>
            </div>
            
        </div>
    </main>
</template>
```

### 2. Uso de Componenetes Vue
> Uso de componentes en src/components y visualizado en src/App.vue (línea 1)
```html
<template>
  <NavBar />
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
  <FooterBar/>
</template>
```

> Comunicación entre componentes en src/views/FormularioView.vue (línea 16, 51, 32)
```js
import { mapState } from 'vuex';
...
computed: {
        ...mapState(['carreraSiguiente'])
    }
...
let html = `
                <p> Ronda: ${this.carreraSiguiente.round}</p>
                <p> Circuito: ${this.carreraSiguiente.Races[0].raceName}</p>
                <p> Fecha: ${this.carreraSiguiente.Races[0].date}</p>
                <p> Hora: ${this.carreraSiguiente.Races[0].time}</p>
                `
```

> Uso de ciclos de vida de un componente para validación de URL en src/Views/ClasificationView.vue (línea 78)
```js
    beforeMount() {
        let regEx = /[a-zA-Z]/
        /* Valida la url */
        if (this.year > 2023 || this.year < 1950 || regEx.test(this.year)) {
            alert('URL de Fecha Incorrecta')
            this.$router.push('2023')
            this.inputFecha = '2023'
            this.cargarAno(this.inputFecha)
        } else {
            this.cargarAno(this.year)
        }
    }
``` 

> Uso de parámetros props (:year) y rutas por defecto en src/router/index.js (línea 19)
```js
  {
    path: '/clasificaciones',
    redirect: '/clasificaciones/2023',
    children: [
      {
        path: '/clasificaciones/:year',
        name: 'clasificaciones',
        component: ClasificationView,
        props: true
      },
    ]
  },
```

> Ejemplo de URL de Clasificaciones, la fecha puede introducirse manualmente como parámetro en el navegador
```
http://localhost:8080/clasificaciones/2019
http://localhost:8080/clasificaciones/1950
http://localhost:8080/clasificaciones/asdf <-- Arroja Error de validación y redirecciona a /2023
```

> Carga y uso de props como parámetros por URL en src/views/ClasificationView.vue (línea 5)

```html
<h1 class="text-center mb-3">Temporada {{ year }}</h1>
```

### 3. Programación con JavaScript

> Conversión de datos (fechas) mediante métodos JS en src/views/CalendarView.vue (línea 127)
```js
compararFechas(actual, proxima) {
      let fechaActual = actual.split("/").join("");
      let fechaProxima = proxima.split("-").join("")
      return fechaActual > fechaProxima
    },
```

### 4. Consumo, manejo de datos y estados 

> Uso de actions del store 'vuex' en src/App.vue (línea 16 y 23)
```js
import { mapActions } from 'vuex'
...
computed: {
    ...mapActions(['cargarFechas', 'cargarStandings', 'cargarCarreraSiguiente']),
  },
methods: {
    ...mapActions(['cargarAno']),
  }
```

> Comunicación entre componentes usando 'vuex' src/store/index.js (línea 26)
```js
actions: {
    async cargarFechas({commit}) {
      let promesa = await fetch('https://ergast.com/api/f1/current.json')
      let datos = await promesa.json();
      let fechas = await datos.MRData.RaceTable.Races
      commit('cargarCarreras', fechas)
    },
```

> Manejo de estados en 'vuex' src/store/index.js (línea 4 y 12)
```js
  state: {
    carreras: null,
    standings: null,
    carreraSiguiente: null,
    ano: null,
  },
  ...
  mutations: {
    cargarCarreras(state, payload) {
      state.carreras = payload
    },
  ```
  
  ### 5. Estructura de archivos y carpetas
  
    .
    ├── ...
    ├── public                  # HTML base y favicon
    ├── src                     # Archivos Principales
    │   ├── assets              # Documentos multimedia y CSS base
    │   ├── components          # Componentes Vue reutilizables
    │   ├── router              # Módulo de Router
    │   ├── store               # Módulo de Store 'vuex'
    │   ├── views               # Vistas Principales
    │   ├── App.vue             # Archivo base de carga de vistas, componentes y módulos
    │   └── main.js             # Archivo base de carga de escripts
    └── ...
  
 

