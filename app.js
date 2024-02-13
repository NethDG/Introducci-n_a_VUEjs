//limpia la consola
console.clear();

//crear una aplicacion vue. pero la sintaxis esta equivocada
//deberia ser como el siguiente
var diversion = Vue.createApp({
    template: "<h1>Hola tonotos</h1>",

});

    diversion.mount("#main");

    var Edad = Vue.createApp({
        template: 
        <div> 
            <h1>aplicacion Vue.js</h1>
            <p>Los años de {{ nombre }} es: {{ edad }} años </p>
            <button click="sumarEdad">Aumentar edad</button>
        </div> 
        
        
        data() {
            return {
                nombre: 'Amicia',
                edad: 16
            };
        },
        methods: {
            sumarEdad() {
                this.edad++;
            }
        }
    })

Edad.mount("#app");

const instanciaVue = Vue.createApp({
    template:
        <div>
            <p>Instancia de vue</p>
        </div>
})

setTimeout(() =>{
    instanciaVue.mount("#instanciaVue");
}, 5000)
