document.getElementById("boton").addEventListener("click", inicio);
function mostrarNombre() {
  document.getElementById("nombre1").innerHTML = localStorage.getItem("nombreUsuario");
}


function mostrarPuntaje() {
  document.getElementById("puntaje1").innerHTML = localStorage.getItem("puntaje");
}
function inicio() {
  window.location.href = "../index.html"
}

mostrarNombre();
mostrarPuntaje();


