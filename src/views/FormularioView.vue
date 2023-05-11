<template>
    <main class="container">
        <section class="row m-5">
            <h1 class="mb-4 text-center">¡Notifícame la próxima carrera!</h1>
            <form @submit.prevent="enviarMail()">
                <input v-model="nombreDestinatario" class="form-control mb-3" type="text" placeholder="Ingresa tu Nombre">
                <input v-model="emailDestinatario" class="form-control mb-3" type="email" name="" id="" placeholder="Ingresa tu Email">
                <button class="btn btn-primary">Enviar</button>
            </form>
        </section>
    </main>
</template>

<script>
import emailjs from 'emailjs-com';
import { mapState } from 'vuex';

export default {
    data() {
        return {
            remitente: "F1ashback",
            nombreDestinatario: null,
            emailDestinatario: null,
        }
    },
    methods: {
        async enviarMail() {
            try {
                const serviceID = "service_kirku2h";
                const templateID = "template_e8e2bhj";
                const publicKey = "e18cPUWULRRLR1iJI";
                let html = `
                <p> Ronda: ${this.carreraSiguiente.round}</p>
                <p> Circuito: ${this.carreraSiguiente.Races[0].raceName}</p>
                <p> Fecha: ${this.carreraSiguiente.Races[0].date}</p>
                <p> Hora: ${this.carreraSiguiente.Races[0].time}</p>
                `
                let templateParams = {
                    to_name: this.nombreDestinatario,
                    from_name: this.remitente,
                    to_email: this.emailDestinatario,
                    my_html: html
                }
                await emailjs.send(serviceID, templateID, templateParams, publicKey);
                await alert(`Se envió correctamente al correo ${this.emailDestinatario}`)
            } catch (error) {
                console.log(error)
            }
        }
    },
    computed: {
        ...mapState(['carreraSiguiente'])
    }

}
</script>

