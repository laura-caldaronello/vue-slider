var app = new Vue({
    el: '#root',
    data: {
        counter: 1,
        minCounter: 1,
        maxCounter: 5, /* devo capire se c'è un modo per generalizzare il 5 con il mio metodo, ma non credo perchè ancora non sono in grado di rilevare quanti file ci sono in una cartella */
        path: 'img/',
        extension: '.jpg',
        fill: ['far','fas'],
    },
    methods: {
        goLeft: function() {
            (this.counter == this.minCounter) ? (this.counter = this.maxCounter) : this.counter--;
        },
        goRight: function() {
            (this.counter == this.maxCounter) ? (this.counter = this.minCounter) : this.counter++;
        },
        choose: function() {
            
        }
    }
});