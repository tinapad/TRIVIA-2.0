document.getElementById("opcion").addEventListener("click", ValidateForm);

function ValidateForm()
{
    var puntaje = parseInt(localStorage.getItem("puntaje"))
    var radioButtons1 = document.getElementsByName("pelicula2");
    for(var i = 0; i < radioButtons1.length; i++)
    {
        if(radioButtons1[i].checked == true)
        {
          var prueba = radioButtons1[i].value
          if(prueba == "Los Increibles")
          {
            if(confirm("Has respondido correctamente"))
              {
                puntaje = puntaje+1
                localStorage.setItem("puntaje",puntaje)
                resultados()
              }
            else
                return false;
          
          }
          else{
            if (confirm("Tu respuesta es incorrecta por favor intenta ingresarla de nuevo, para que continues correctamente una peque;a pista, todos sus familiares tienen superpoderes"))
              return pagina22()
          } 
        }
    }
}


function resultados() {
  window.location.href = "../pages/puntaje.html"
}

function pagina22() {
  window.location.href = "../pages/preguntas22.html"
}