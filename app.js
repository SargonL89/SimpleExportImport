const operaciones = require('./operaciones.js');

const resSuma = operaciones.sumar(5, (7*4));
const resResta = operaciones.restar(5, (7*4));
const resMultip = operaciones.multiplicar(5, (7*4));

console.log('El resultado de la suma es:', resSuma);
console.log('El resultado de la resta es:', resResta);
console.log('El resultado de la multiplicación es:', resMultip);