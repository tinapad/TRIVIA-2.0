document.getElementById("opcion").addEventListener("click", ValidateForm);
document.getElementById("puntaje").addEventListener("click", puntaje);

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
            if(confirm("Se ha guardado tu respuesta"))
              {
                puntaje = puntaje +1

                localStorage.setItem("puntaje",puntaje)
                pagina2()
                
              }
            else
                return false;
          
          }
          else{
            if(confirm("Se ha guardado tu respuesta"))
              {
                localStorage.setItem("puntaje",puntaje)
                pagina2()
              }
          } 
        }
    }
}
function puntaje() {
  window.location.href = "../pages/puntaje.html"
}

function pagina2() {
  window.location.href = "../pages/preguntas2.html"
}

function pagina12() {
  window.location.href = "../pages/preguntas12.html"
}