window.onscroll = function() {scrollFunction()};

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