document.getElementById("boton1").addEventListener("click", pagina1);
document.getElementById("boton2").addEventListener("click", pagina2);

function mostrarNombre() {
  document.getElementById("nombre1").innerHTML = localStorage.getItem("nombreUsuario");
}

mostrarNombre();


function pagina1() {
  window.location.href = "../pages/preguntas1.html"
}

function pagina2() {
  window.location.href = "../pages/preguntas2.html"
}

