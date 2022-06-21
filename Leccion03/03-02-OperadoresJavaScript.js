let a = 3, b = 2;
let z = a + b;
console.log( "Resultado de la suma: " + z);

z = a - b;
console.log( "Resultado de la resta: " + z);

z = a * b;
console.log( "Resultado de la mult: " + z);

z = a / b;
console.log(" Resultado de la division: " + z);

z = a % b; // residuo de la division
console.log( "Resultado de operacion modulo (residuo): " + z);

z = a ** b;
console.log( "Resultado de operador exponente: " + z);

z = a + b;
//Incremento
//Pre-Incrementeo (el operador ++ antes de la variable)
z = ++a;
console.log(a);
console.log(z);

//Post-Incrementeo (el operador ++ despues de la variable)
z = b++;
console.log(b);
console.log(z);

//Decremento
//Pre-Decrementeo (el operador -- antes de la variable)
z = --a;
console.log(a);
console.log(z);

//Deecremento
//Post-Decrementeo (el operador -- despues de la variable)
z = b--;
console.log(b);
console.log(z);
