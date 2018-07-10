function mostrar()
{
//tomo la edad  

var edad;

edad = parseInt(document.getElementById("edad").value);

if(edad < 13 )
{

    alert(" Es un NIÑO");

}
else if (edad >=13 && edad <=17 )
{

    alert(" Es un ADOLESCENTE");

}
else
{

    alert(" Es MAYOR DE EDAD");

}


}//FIN DE LA FUNCIÓN

