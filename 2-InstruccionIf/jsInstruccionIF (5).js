function mostrar()
{
//tomo la edad  

var edad;

edad = parseInt(document.getElementById("edad").value);

if(!(edad >= 13 && edad <= 17))
{

    alert(" NO Es Adolescente");

}



}//FIN DE LA FUNCIÓN