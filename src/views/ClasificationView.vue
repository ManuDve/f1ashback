<template>
    <section class="container table-responsive my-3">
        <div class="row">
            <div class="col">
                <h1 class="text-center mb-3">Temporada {{year < 1951 || year > 2023 ? navegar() : year}}</h1>

                <form class="input-group flex-nowrap my-3" @submit.prevent="navegar(year)" >
                    <span class="input-group-text" id="addon-wrapping">Ingresa el Año</span>
                    <input type="numer" class="form-control" placeholder="2023" aria-label="año" aria-describedby="addon-wrapping" min="1952" max="2023" v-model="fecha">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2" >Buscar</button>
                </form>
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
                        <td>{{ piloto.Driver.givenName }} {{ piloto.Driver.familyName }}</td>
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
        year: { type: String, default: '2023' }
    },
    data() {
        return {
            fecha: null
        }
    },
    methods:{
        ...mapActions(['cargarAno']),
        navegar() {
            if (this.fecha > 2023 || this.fecha < 1951) {
                alert('Fecha inválida')
                this.fecha = 2023;
                this.$router.push('/clasificaciones/' + this.fecha);
            } else {
                this.$router.push('/clasificaciones/' + this.fecha);
            }
        }
    },
    computed: {
        ...mapState(['ano'])
    },
    watch: {
        year() {
            this.cargarAno(this.year);
        }
    },
    mounted() {
        this.cargarAno(this.year);
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

@media screen and (min-width: 576px) {

    td,
    th {
        padding: 1em;
    }

}
</style>