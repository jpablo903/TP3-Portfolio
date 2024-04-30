window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("botonArriba").style.display = "block";
  } else {
    document.getElementById("botonArriba").style.display = "none";
  }
}

function volverArriba() {
  document.documentElement.scrollTop = 0;
}

function validarFormulario() {
  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var telefono = document.getElementById('telefono').value;

  if (nombre == "" || email == "" || telefono == "") {
    alert("Todos los campos son obligatorios.");
    return false;
  }

  var Nombre = /^[a-zA-Z\s]*$/;
  if (!Nombre.test(nombre)) {
    alert("El nombre solo puede contener caracteres alfabéticos.");
    return false;
  }

  var Email = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!Email.test(email)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return false;
  }

  var Telefono = /^\d{10}$/;
  if (!Telefono.test(telefono)) {
    alert("El teléfono incorrecto, debe contener solo 10 números.");
    return false;
  }

  localStorage.setItem('enviado', 'true');

  return true;
}

window.onload = function() {
  if (localStorage.getItem('enviado') === 'true') {
      document.getElementById('formularioDeContacto').reset();
      localStorage.removeItem('enviado');
  }

  document.getElementById('formularioDeContacto').addEventListener('submit', function() {
    this.reset();
  });
};