function mostrar()
{
//tomo la edad  
 var edad;
 var estadocivil;

 edad = parseInt(document.getElementById("edad").value);
 estadocivil=document.getElementById("estadoCivil").value;

// if (!(edad < 18 && estadocivil != "Soltero"))
// {

     if (estadocivil == "Soltero" && edad >=18)
     {

         alert("ES SOLTERO Y NO ES MENOR")

     }

 //}
	


}//FIN DE LA FUNCIÓN