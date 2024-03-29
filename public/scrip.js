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







window.addEventListener('DOMContentLoaded', function() {
  var images = document.querySelectorAll('.enzo_home');

  images.forEach(function(img) {
    var position = img.getBoundingClientRect();

    // Si la parte superior de la imagen está dentro del área visible de la ventana
    // Agregar la clase 'reveal' para mostrar la imagen
    if (position.top < window.innerHeight) {
      img.classList.add('reveal');
    }
  });
});

window.addEventListener('DOMContentLoaded', function() {
  var images = document.querySelectorAll('.pili_home');

  images.forEach(function(img) {
    var position = img.getBoundingClientRect();

    // Si la parte superior de la imagen está dentro del área visible de la ventana
    // Agregar la clase 'reveal' para mostrar la imagen
    if (position.top < window.innerHeight) {
      img.classList.add('reveal');
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