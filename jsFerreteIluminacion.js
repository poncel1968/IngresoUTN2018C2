/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	

var cantidad;
var marca;
var porDesc = 0;
var precio = 35;
var precioFinal;
var iibb;


cantidad = parseInt(document.getElementById("Cantidad").value)
document.getElementById("Marca").value

switch (cantidad)
{

    case 1 : 
    case 2 :
    case 3 :
       { if (marca == "ArgentinaLuz"){

            porDesc = 15;
        }
        else if (marca == "FelipeLamparas"){

            porDesc = 10;
        }
        else{

            porDesc = 5;
        }
        break;
       }
    case 4 : 
       { if (marca == "ArgentinaLuz" || marca == "FelipeLamparas"){

            porDesc= 25;
 
        }
        else{

            porDesc=20;
        }
        break;
       }
    case 5 :
        { if (marca == "ArgentinaLuz"){

            porDesc = 40;
        }
        else{

            porDesc = 30;
        }
        break;
        }

     default :    
        {
            porDesc= 50;  
            break;
        }

}

precioFinal=( cantidad * precio ) - (cantidad * precio * porDesc / 100);


if (precioFinal>120){

        iibb= precioFinal * 0.1;
        precioFinal=precioFinal + iibb;
    
    alert("Usted pago " + iibb + " de IIBB.");

}

document.getElementById("precioDescuento").value = precioFinal;


}//fin function name(params) 
