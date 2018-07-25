function mostrar()
{

	
	var positivo=0;
	var negativo=1;
	var numero;
	var contnegativos=0;
	var respuesta;

respuesta= prompt("Desea ingresar otro numero?");

while (respuesta =="si"){

	numero= parseInt(prompt("Ingrese un número entero"));

	if (numero>= 0){

		positivo=positivo + numero;
	}
	else {

		negativo = negativo * numero;
		contnegativos+=1;


	} 

	respuesta= prompt("Desea ingresar otro numero?");

	}//while



document.getElementById('suma').value=positivo;

if (contnegativos==0){

	negativo = 0;

}

document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN