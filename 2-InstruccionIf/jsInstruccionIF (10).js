function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var nota;
var comentario;

nota = Math.floor(Math.random()*10 + 1  ) ;

if (nota < 4 )
{

	comentario= "VAMOS, LA PROXIMA SE PUEDE";

}
else if( nota <= 8)
{

	comentario = "APROBO";

}
else
{

	comentario= "EXCELENTE";

}



alert("La Nota es " + nota + " --->  " + comentario);


}//FIN DE LA FUNCIÓN