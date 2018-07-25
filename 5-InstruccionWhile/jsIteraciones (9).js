function mostrar()
{

	var maximo;
	var minimo;
	var respuesta;
	var numero;
	var i =1;

	
	numero=parseInt(prompt("Ingrese un numero -->"));
			
			maximo = numero;
			minimo = numero;

	do
	{

		numero=parseInt(prompt("Ingrese un numero -->"));
		
			if (numero>maximo)
			{

				maximo=numero
			}
			
			else if (numero <minimo)
			{

				minimo= numero	

			}
		

		respuesta = prompt("Desea ingresar otro numero?");

	}while(respuesta=="si");


document.getElementById("maximo").value= maximo;
document.getElementById("minimo").value= minimo;


}//FIN DE LA FUNCIÓN