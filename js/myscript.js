// Descrizione:
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email
// e stamparli in pagina all’interno di una lista.
// (chiaramente usando Vue, etc.,)
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const { createApp } = Vue;

createApp({
    data() {
        return {
            email: 10,
            emails: [],
        }
    },
    methods: {

        printEmails() {
            for (let i = 0; i < this.email; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    
                    this.emails.push(result.data.response);
    
                });
    
            }
        }
    },
    mounted() {

        this.printEmails();

    }
}).mount('#app')