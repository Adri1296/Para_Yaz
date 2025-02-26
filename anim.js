// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Cada vez que me levanto", time: 1 },
  { text: "Y veo que a mi lado estás", time: 2 },
  { text: "Me siento renovado", time: 3 },
  { text: "Y me siento aniquilado", time: 4},
  { text: "Aniquilado si no estás", time: 5 },
  { text: "Tu controlas toda mi verdad", time: 6 },
  { text: "Y todo lo que está de más", time: 7 },
  { text: "Tus ojos me llevan lentamente al sol", time: 8 },
  { text: "Y tu boca me habla del amor y el corazon", time: 9 },
  { text: "Tu piel tiene el color", time: 10 },
  { text: "De un rojo atardecer", time: 11 },
  { text: "Y es por ti", time: 12 },
  { text: "Que late mi corazon", time: 13 },
  { text: "Y es por ti", time: 14 },
  { text: "Que brillan mis ojos hoy", time: 15},
  { text: "Y es por ti", time: 16 },
  { text: "Que he vuelto a habalr de amor", time: 17 },
  { text: "Y es por ti", time: 18 },
  { text: "Que calma mi dolor", time: 19 },
  { text: "Y cada vez que yo te busco", time: 20 },
  { text: "Y no te puedo aún hallar", time: 21 },
  { text: "Me siento un vagabundo", time: 22 },
  { text: "Perdido por el mundo", time: 23 },
  { text: "Desordenado si no estás", time: 24 },
  { text: "Como mueves tú mi felicidad", time: 25 },
  { text: "Y todo lo que está de más", time: 26 },
  { text: "Tus ojos me llevan lentamente al sol", time: 27 },
  { text: "Y tu boca me habla del amor y el corazón", time: 28 },
  { text: "Tu piel tiene el color de un rojo atardecer", time: 29 },
  { text: "Y es por ti", time: 30 },
  { text: "Que late mi corazón", time: 31 },
  { text: "Y es por ti", time: 32 },
  { text: "Que he vuelto a hablar de amor", time: 33 },
  { text: "Y es por ti", time: 34 },
  { text: "Que brillan mis ojos hoy", time: 35 },
  { text: "Y es por ti", time: 36 },
  { text: "Que calma mi dolor", time: 37 },
  { text: "Cada vez que me levanto", time: 38 },
  { text: "Y veo que a mi lado estás", time: 39 },
  { text: "Cada vez que me levanto", time: 40 },
  { text: "Cada vez que me levanto", time: 41 },
  { text: "Cada vez que me levanto", time: 42 },
  { text: "Cada vez que me levanto", time: 45 },
  { text: "Cada vez que me levanto", time: 56 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 2s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 2000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
