// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Cada vez que me levanto", time: 3 },
  { text: "Y veo que a mi lado estás", time: 4 },
  { text: "Me siento renovado", time: 5 },
  { text: "Y me siento aniquilado", time: 6 },
  { text: "Aniquilado si no estás", time: 7 },
  { text: "Tu controlas toda mi verdad", time: 8 },
  { text: "Y todo lo que está de más", time: 9 },
  { text: "Tus ojos me llevan lentamente al sol", time: 10 },
  { text: "Y tu boca me habla del amor y el corazon", time: 11 },
  { text: "Tu piel tiene el color", time: 12 },
  { text: "De un rojo atardecer", time: 13 },
  { text: "Y es por ti", time: 37 },
  { text: "Que late mi corazon", time: 38 },
  { text: "Y es por ti", time: 39 },
  { text: "Que brillan mis ojos hoy", time: 40},
  { text: "Y es por ti", time: 41 },
  { text: "Que he vuelto a habalr de amor", time: 42 },
  { text: "Y es por ti", time: 43 },
  { text: "Que calma mi dolor", time: 44 },
  { text: "Y cada vez que yo te busco", time: 45 },
  { text: "Y no te puedo aún hallar", time: 46 },
  { text: "Me siento un vagabundo", time: 48 },
  { text: "Perdido por el mundo", time: 49 },
  { text: "Desordenado si no estás", time: 50 },
  { text: "Como mueves tú mi felicidad", time: 51 },
  { text: "Y todo lo que está de más", time: 52 },
  { text: "Tus ojos me llevan lentamente al sol", time: 53 },
  { text: "Y tu boca me habla del amor y el corazón", time: 53 },
  { text: "Tu piel tiene el color de un rojo atardecer", time: 55 },
  { text: "Y es por ti", time: 56 },
  { text: "Que late mi corazón", time: 57 },
  { text: "Y es por ti", time: 58 },
  { text: "Que he vuelto a hablar de amor", time: 59 },
  { text: "Y es por ti", time: 60 },
  { text: "Que brillan mis ojos hoy", time: 61 },
  { text: "Y es por ti", time: 62 },
  { text: "Que calma mi dolor", time: 63 },
  { text: "Cada vez que me levanto", time: 64 },
  { text: "Y veo que a mi lado estás", time: 65 },
  { text: "Cada vez que me levanto", time: 66 },
  { text: "Cada vez que me levanto", time: 67 },
  { text: "Cada vez que me levanto", time: 68 },
  { text: "Cada vez que me levanto", time: 69 },
  { text: "Cada vez que me levanto", time: 70 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
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
