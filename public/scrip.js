window.addEventListener('wheel', function(e) {
  if (e.deltaY > 0) {
    window.scrollBy(0, window.innerHeight);
  } else {
    window.scrollBy(0, -window.innerHeight);
  }
});


// Set the date we're counting down to
var countDownDate = new Date("Apr 21, 2024 12:00:00").getTime();

// Update the countdown every second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  var distance = countDownDate - now;

  // Calculate days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);


document.addEventListener("DOMContentLoaded", function() {
  var imagenes = document.querySelectorAll(".imagen-1");

  // Función para mezclar el orden de las imágenes
  function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function mostrarImagenes() {
    var imagenesAleatorias = mezclarArray(Array.from(imagenes)); // Mezclar el orden de las imágenes

    imagenesAleatorias.forEach(function(imagen, index) {
      setTimeout(function() {
        imagen.style.opacity = "1";
        imagen.style.transform = "scale(1)";
      }, index * 200); // Ajusta el tiempo de retardo según tus preferencias
    });
  }

  mostrarImagenes();
});


window.addEventListener('DOMContentLoaded', function() {
  var invitacion = document.querySelectorAll('.conte-nombre');

  invitacion.forEach(function(inv) {
    var position = inv.getBoundingClientRect();

    // Si la parte superior de la imagen está dentro del área visible de la ventana
    // Agregar la clase 'reveal' para mostrar la imagen
    if (position.top < window.innerHeight) {
      inv.classList.add('reveal-inv');
    }
  });
});






window.addEventListener('DOMContentLoaded', function() {
  var images = document.querySelectorAll('.logo-nombre');

  images.forEach(function(img) {
    var position = img.getBoundingClientRect();

    // Si la parte superior de la imagen está dentro del área visible de la ventana
    // Agregar la clase 'reveal' para mostrar la imagen
    if (position.top < window.innerHeight) {
      img.classList.add('reveal');
    }
  });
});


window.addEventListener('scroll', function() {
  var images = document.querySelectorAll('.fondopag2');

  images.forEach(function(img) {
    var position = img.getBoundingClientRect();

    // Si la parte superior de la imagen está dentro del área visible de la ventana
    // Agregar la clase 'reveal' para mostrar la imagen
    if (position.top < window.innerHeight) {
      img.classList.add('reveal2');
    }
  });
})