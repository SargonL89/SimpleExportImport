const operaciones = require('./operaciones.js');

const resSuma = operaciones.sumar(5, (7*4));
const resResta = operaciones.restar(5, (7*4));
const resMultip = operaciones.multiplicar(5, (7*4));

console.log('El resultado de la suma es:', resSuma);
console.log('El resultado de la resta es:', resResta);
console.log('El resultado de la multiplicación es:', resMultip);


const funciones = require('./functions.js');

const busqueda = funciones.buscarUsuario('Ukraine', funciones.miCallback);
console.log(busqueda)

const busqueda2 = funciones.buscarUsuario2('Lucrecia', funciones.printInConsole);
console.log(busqueda2);

funciones.buscarUsuario3('Fernandito')
.then((result) => {
    console.log('F3. El resultado de la promesa es:', result)
})
.catch((error) => {
    console.error('F3. Error al buscar por promesa:', error)
});

funciones.buscarUsuario4('Norway');

const busqueda5 = funciones.buscarUsuario5('Iran');
console.log('F5. El resultado try/catch es:', busqueda5);