
function mostrar()
{
var ancho;
var largo;
var resultado;

ancho = prompt("Ingresar ancho");
largo = prompt("Ingresar largo");

ancho = parseInt(ancho);
largo = parseInt(largo);

resultado = (ancho  + largo) * 2;

alert("El perímetro es  " + resultado);


}
