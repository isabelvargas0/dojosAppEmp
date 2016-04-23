/*var nombre = "Isabel Chaverra";
var edad = 16;
if (edad >= 18){
	alert("Es mayor de edad");
}else{
	alert("Es menor de edad");
}*/

num= prompt("Digite un numero del 1 al 4");
switch(num){
	case 1:
	console.log("Has presionado el 1");
	case 2:
	console.log("Has presionado el 2");
	case 3:
	console.log("Has presionado el 3");
	case 4:
	console.log("Has presionado el 4");

}

numero = prompt("Ingrese numero para calcular el factorial");
var factorial = function(numero){
	factorial = 1;
	for (numero; numero > 0; numero--) {
		factorial += numero;
	}
	return factorial;
}

alert(factorial(numero));

function factorial(numero){
factorial = 1;
	for (numero; numero > 0; numero--) {
		factorial += numero;
	}
	return factorial;
}