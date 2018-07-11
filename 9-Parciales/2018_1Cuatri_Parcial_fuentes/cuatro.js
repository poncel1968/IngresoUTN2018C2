function mostrar()
{
var num1;
var num2;
var resultado;

num1 = parseInt(prompt("Ingrese el primer número"));
num2 = parseInt(prompt("Ingrese el segundo número"));



if (num1 == num2)
{

    num1=String(num1);
    num2=String(num2);

    alert( num1 + num2);
}
else if (num1>num2)
{

    resultado = num1 - num2;
    alert(resultado);
}
else if (num1<num2)
{

    resultado = num1 + num2;

    if (resultado >10)
    {

        alert("la suma es " + resultado + " y supero el 10");

    }
    else
    {

        alert(resultado);

    }
    
  


}





}//fin function
