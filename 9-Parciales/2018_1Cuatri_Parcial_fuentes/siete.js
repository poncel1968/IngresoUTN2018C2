function mostrar()
{

var nota;
var sexo;
var acumu_nota = 0;
var cont_nota=0;
var nota_baja;
var sexo_nota;
var flag=0;



for(var i=0;i<5;i++){

do{

    nota=parseInt(prompt("Ingrese la nota"));

}while(nota >10 || nota <0);

do{

    sexo=prompt("Ingrese Sexo");
    sexo=sexo.toLowerCase();

}while(sexo != "f" && sexo !="m")

acumu_nota=acumu_nota+nota;

cont_nota++;

if(!flag ){

    nota_baja=nota;

}
else{ 

    if (nota<nota_baja){

        nota_baja

    }

}


}


}//end function
