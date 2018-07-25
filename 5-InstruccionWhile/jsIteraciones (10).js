function mostrar()
{

/*

Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 2-Suma de los positivos.
3-Cantidad de positivos. 4-Cantidad de negativos. 
5-Cantidad de ceros. 6-Cantidad de números pares
7-Promedio de positivos. 8-Promedios de negativos.
 9-Diferencia entre positivos y negativos, (positvos-negativos).
 
 */

var sumapositivo = 0;
var sumanegativo = 0;
var cantpositivos = 0;
var cantnegativos = 0;
var cantceros = 0;
var cantpares = 0;
var numero;
var modulo;
var respuesta = "si";

while(respuesta == "si"){

    numero = parseInt(prompt("Ingrese un numero -->"));

    if(numero > 0){

        sumapositivo=sumapositivo + numero;
        cantpositivos=cantpositivos+1;

    }

    else if ( numero < 0){

        sumanegativo=sumanegativo + numero;
        cantnegativos=cantnegativos+1;

    }
    
    else{

        cantceros=cantceros+1;
        cantpares=cantpares+1;
    }

    modulo=numero%2;

    if (modulo==0){

        cantpares=cantpares+1;
    }



    respuesta = ("Desea ingresar otro numero?");


}








}//fin function