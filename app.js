//limpia la consola
console.clear("Hola mundo");

//crear una aplicacion vue. pero la sintaxis esta equivocada
//deberia ser como el siguiente
var diversion = Vue.createApp({
    template: "<h1>Hola tonotos</h1>",

});

    diversion.mount("#main");

    var diversion = Vue.createApp({
        template: 
        <div> 
            <h1>aplicacion Vue.js</h1>
            <p>Los años de {{ nombre }} es: {{}} </p>
            <button click="sumarEdad">Aumentar edad</button>

        </div> 
    })
