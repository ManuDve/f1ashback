<template>
    <section class="container table-responsive my-3">
        <div class="row">
            <div class="col">
                <h1 class="text-center mb-3">Temporada {{ year }}</h1>

                <form class="input-group flex-nowrap my-3" @submit.prevent="navegar(inputFecha)" >
                    <span class="input-group-text" id="addon-wrapping">Ingresa el Año</span>
                    <input type="numer" class="form-control" placeholder="2023" aria-label="año" aria-describedby="addon-wrapping" min="1952" max="2023" v-model="inputFecha">
                    <button class="btn btn-outline-secondary" type="submit" id="button-addon2" >Buscar</button>
                </form>
            </div>
        </div>
        <div class="d-flex justify-content-center">
      <div v-if="!ano" class="spinner-border" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
        <div class="row">
            <div class="col">
                <table v-if="ano" class="table text-center">
                    <thead>
                        <th>Posición</th>
                        <th>Piloto</th>
                        <th>Puntos</th>
                        <th>Victorias</th>
                        <th>Escuderia</th>
                    </thead>
                    <tbody v-for="piloto in ano" :key="'a' + piloto.position">
                        <td>{{ piloto.position }}</td>
                        <td><font-awesome-icon v-if="piloto.position == 1 && year != 2023" :icon="['fas', 'crown']" /> {{ piloto.Driver.givenName }} {{ piloto.Driver.familyName }}</td>
                        <td>{{ piloto.points }}</td>
                        <td>{{ piloto.wins }}</td>
                        <td>{{ piloto.Constructors[0].name }}</td>
                    </tbody>
                </table>
            </div>
        </div>


    </section>
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default {
    props: {
        year: { type: String}
    },
    data() {
        return {
            inputFecha: this.year,
            ultimaFechaCorrecta: '2023'
        }
    },
    computed: {
        ...mapState(['ano']),
    },
    methods: {
        ...mapActions(['cargarAno']),
        navegar(input) {
            let regEx = /[a-zA-Z]/
            if (input > 2023 || input < 1950 || regEx.test(input) ) {
                alert('Fecha Incorrecta')
                this.inputFecha = this.ultimaFechaCorrecta
                this.$router.push(this.inputFecha)
                this.cargarAno(this.inputFecha)
            } else {
                this.ultimaFechaCorrecta = this.inputFecha;
                this.$router.push(this.inputFecha)
                this.cargarAno(this.inputFecha)
            }
            
        }
    },
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
}

</script>

<style scoped>
h1 {
    text-transform: uppercase;
    font-size: 2rem;
    color: var(--secondary-color)
}

table {
    color: var(--main-color)
}

th {
    font-weight: 500;
    color: var(--secondary-color)
}

td {
    font-weight: 400;
}

td,
th {
    padding: .5em .2em;
    border: 1px solid var(--main-color-dark);
}

.input-group-text {
    background-color: var(--main-bg);
    color: var(--main-color);
    border: 1px solid var(--main-color-dark);
}

.form-control:focus {
    outline: 0;
    box-shadow: none;
}

.svg-inline--fa {
    vertical-align: bottom;
    color: var(--secondary-color);
}

@media screen and (min-width: 576px) {
    td,
    th {
        padding: 1em;
    }

}
</style>