/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 
var edad;
var sexo;
var estadocivil;
var estadocivil_string;
var sueldobruto;
var legajo;
var nacionalidad;




do{

    edad=parseInt(prompt("Ingrese la edad .."));

}while (edad <18 || edad >90 || isNaN(edad));

document.getElementById("Edad").value= edad;

do{

    sexo=(prompt("Ingrese sexo .."));
    sexo=sexo.toUpperCase();

}while (!(sexo=="F"|| sexo == "M"));

document.getElementById("Sexo").value= sexo;

do{

    estadocivil=parseInt(prompt("Ingrese estado civil..."));


}while(estadocivil != 1 && estadocivil != 2 && estadocivil != 3 && estadocivil != 4 && !(isNaN(edad)) );

switch (estadocivil){

    case 1 :
        estadocivil_string=" Soltero"
        break;
    case 2 : 
        estadocivil_string=" Casado"
        break;
    case 3 :
        estadocivil_string=" Divorciado"
        break;        
    case 4 :
        estadocivil_string=" Viudos"
        break;        
}

document.getElementById("EstadoCivil").value= estadocivil + estadocivil_string;









}//Fin function
