<template>
    <form @submit.prevent="enviarMail()">
        <input v-model="nombreDestinatario" type="text" placeholder="tu nombre">
        <input v-model="emailDestinatario" type="email" name="" id="" placeholder="tuemail">
        <button>Enviar</button>
    </form>
    <div v-if="carreraSiguiente" id="laCarrera">
        <p> Ronda: {{ carreraSiguiente.round }}</p>
        <p> Circuito: {{ carreraSiguiente.Races[0].raceName }}</p>
        <p> Fecha: {{ carreraSiguiente.Races[0].date }}</p>
        <p> Hora: {{ carreraSiguiente.Races[0].time }}</p>
    </div>
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
                let templateParams = {
                    to_name: this.nombreDestinatario,
                    from_name: this.remitente,
                    to_email: this.emailDestinatario,
                    my_html: await document.getElementById('laCarrera').innerHTML
                }
                await emailjs.send(serviceID, templateID, templateParams, publicKey);
                await alert("Se envió correctamente")
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