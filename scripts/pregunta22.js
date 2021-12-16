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
            if(confirm("Se ha guardado tu respuesta"))
              {
                puntaje = ++puntaje
                localStorage.setItem("puntaje",puntaje)
                resultados()
              }
            else
                return false;
          
          }
          else{
            if(confirm("Se ha guardado tu respuesta"))
              return resultados()
          } 
        }
    }
}

function resultados() {
  window.location.href = "../pages/puntaje.html"
}

