function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;



do{

	acumulador = acumulador + parseInt(prompt("Ingrese un número : "));

	respuesta = prompt("Desea ingresar un numero?");

	contador+=1;

}while(respuesta == "si");

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN