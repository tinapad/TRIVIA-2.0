document.getElementById("boton").addEventListener("click", guardarnombre);


function guardarnombre() {
  let nameUser = document.getElementById("nombre").value;
  localStorage.setItem("nombreUsuario", nameUser);
  if (nameUser === "") {
    alert("Por favor, ingrese su nombre");
  } else {
    window.location.href = "pages/menu.html";
  }
}
