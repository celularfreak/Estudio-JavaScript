//Ejembplo AND (&&), regresa true si ambos valores son true
let a = 5;
let valMin = 0, valMax = 10;

if ( a >= valMin && a <= valMax ){
	console.log("El número está dentro del rango");
}
else {
	console.log("El número está fuera del rango");
}

a = -1;

if ( a >= valMin && a <= valMax ){
	console.log("El número está dentro del rango");
}
else {
	console.log("El número está fuera del rango");
}

//Ejemplo OR (||), regresa true si alguno de los valores es true
let vacaciones = false, diaDescanso = false;
if( vacaciones || diaDescanso ){
	console.log( "Puede ir al juego del hijo");
}
else{
	console.log( "No puede ir al juego del hijo");
}

vacaciones = true, diaDescanso = false;
if( vacaciones || diaDescanso ){
	console.log( "Puede ir al juego del hijo");
}
else{
	console.log( "No puede ir al juego del hijo");
}

vacaciones = false, diaDescanso = true;
if( vacaciones || diaDescanso ){
	console.log( "Puede ir al juego del hijo");
}
else{
	console.log( "No puede ir al juego del hijo");
}
