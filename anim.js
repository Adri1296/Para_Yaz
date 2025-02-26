// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Cada vez que me levanto", time: 1 },
  { text: "Y veo que a mi lado estás", time: 20 },
  { text: "Me siento renovado", time: 8 },
  { text: "Y me siento aniquilado", time: 10},
  { text: "Aniquilado si no estás", time: 12 },
  { text: "Tu controlas toda mi verdad", time: 14 },
  { text: "Y todo lo que está de más", time: 16 },
  { text: "Tus ojos me llevan lentamente al sol", time: 16 },
  { text: "Y tu boca me habla del amor y el corazon", time: 18 },
  { text: "Tu piel tiene el color", time: 20 },
  { text: "De un rojo atardecer", time: 22 },
  { text: "Y es por ti", time: 24 },
  { text: "Que late mi corazon", time: 26 },
  { text: "Y es por ti", time: 28 },
  { text: "Que brillan mis ojos hoy", time: 30},
  { text: "Y es por ti", time: 32 },
  { text: "Que he vuelto a habalr de amor", time: 34 },
  { text: "Y es por ti", time: 36 },
  { text: "Que calma mi dolor", time: 38 },
  { text: "Y cada vez que yo te busco", time: 40 },
  { text: "Y no te puedo aún hallar", time: 42 },
  { text: "Me siento un vagabundo", time: 44 },
  { text: "Perdido por el mundo", time: 46 },
  { text: "Desordenado si no estás", time: 48 },
  { text: "Como mueves tú mi felicidad", time: 50 },
  { text: "Y todo lo que está de más", time: 52 },
  { text: "Tus ojos me llevan lentamente al sol", time: 54 },
  { text: "Y tu boca me habla del amor y el corazón", time: 56 },
  { text: "Tu piel tiene el color de un rojo atardecer", time: 58 },
  { text: "Y es por ti", time: 60 },
  { text: "Que late mi corazón", time: 62 },
  { text: "Y es por ti", time: 64 },
  { text: "Que he vuelto a hablar de amor", time: 66 },
  { text: "Y es por ti", time: 67 },
  { text: "Que brillan mis ojos hoy", time: 68 },
  { text: "Y es por ti", time: 70 },
  { text: "Que calma mi dolor", time: 72 },
  { text: "Cada vez que me levanto", time: 74 },
  { text: "Y veo que a mi lado estás", time: 76 },
  { text: "Cada vez que me levanto", time: 78 },
  { text: "Cada vez que me levanto", time: 80 },
  { text: "Cada vez que me levanto", time: 82 },
  { text: "Cada vez que me levanto", time: 84 },
  { text: "Cada vez que me levanto", time: 86 },

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
