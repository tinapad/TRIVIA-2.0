document.getElementById("opcion").addEventListener("click", ValidateForm);
function ValidateForm()
{
    var puntaje = 0
    var radioButtons1 = document.getElementsByName("pelicula1");
    for(var i = 0; i < radioButtons1.length; i++)
    {
        if(radioButtons1[i].checked == true)
        {
          var prueba = radioButtons1[i].value
          if(prueba == "Buscando a Nemo")
          {
            if(confirm("Has respondido correctamente"))
              {
                puntaje = puntaje +1
                localStorage.setItem("puntaje",puntaje)
                pagina2()
              } 
            else
                return false;
          
          }
          else{
            if (confirm("Tu respuesta es incorrecta por favor intenta ingresarla de nuevo, para que continues correctamente una peque;a pista, el padre tiene una amiga que es muy olvidadiza"))
              return pagina12()
          } 
        }
    }
}


function pagina2() {
  window.location.href = "../pages/preguntas2.html"
}

function pagina12() {
  window.location.href = "../pages/preguntas12.html"
}