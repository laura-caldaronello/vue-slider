var app = new Vue({
    el: '#root',
    data: {
        counter: 1,
        path: 'img/',
        extension: '.jpg'
    },
    methods: {
        goLeft: function() {
            (this.counter == 1) ? (this.counter = 5) : (this.counter -= 1) /* devo capire se c'è un modo per generalizzare il 5 con il mio metodo, ma non credo perchè ancora non sono in grado di rilevare quanti file ci sono in una cartella */
        },
        goRight: function() {
            (this.counter == 5) ? (this.counter = 1) : (this.counter += 1)
        }
    }
});