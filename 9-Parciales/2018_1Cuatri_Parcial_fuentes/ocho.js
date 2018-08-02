function mostrar()
{

    var letra;
    var numero;
    var cantpares=0;
    var cantimpares=0;
    var cantceros=0;
    var cantpositivos=0;
    var acumpositivos=0;
    var acumnegativos=0;
    var letramaximo;
    var numeromaximo;
    var letraminimo;
    var numerominimo;
    var respuesta="s";
    var flag=0;

 while (respuesta != "no"){

     letra=prompt("Ingrese una letra");

     numero=parseInt(prompt("Ingrese un numero "));

     while (numero <-100 || número >100 || isNan(numero)){

         numero = parseInt(prompt("Vuelva a ingresar un numero "));

     }

     if (numero%2==0 ){

         cantpares++;

     }
     else {

         cantimpares++;
     }
  

     if (numero >0 ){

         acumpositivos=acumpositivos+numero;
         cantpositivos++;
     }
     else if (numero < 0) {

         acumnegativos=acumnegativos+numero;
     }
     else{

         cantceros++;

     }


     if (numero>numeromaximo || flag==0){

         numeromaximo=numero;
         letramaximo=letra;

     }
     
     if( numero < numerominimo || flag==0){

         numerominimo= numero;
         letraminimo=letra;

         flag=1;


     }
     
     
     

        respuesta=prompt("Desea continuar ('no' para salir)");
     


}








 }//end while       


}
