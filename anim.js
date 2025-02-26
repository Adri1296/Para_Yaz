// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Cada vez que me levanto", time: 1 },
  { text: "Y veo que a mi lado estás", time: 7 },
  { text: "Me siento renovado", time: 8 },
  { text: "Y me siento aniquilado", time: 10},
  { text: "Aniquilado si no estás", time:  },
  { text: "Tu controlas toda mi verdad", time:  },
  { text: "Y todo lo que está de más", time:  },
  { text: "Tus ojos me llevan lentamente al sol", time:  },
  { text: "Y tu boca me habla del amor y el corazon", time:  },
  { text: "Tu piel tiene el color", time:  },
  { text: "De un rojo atardecer", time:  },
  { text: "Y es por ti", time:  },
  { text: "Que late mi corazon", time:  },
  { text: "Y es por ti", time:  },
  { text: "Que brillan mis ojos hoy", time: },
  { text: "Y es por ti", time:  },
  { text: "Que he vuelto a habalr de amor", time:  },
  { text: "Y es por ti", time:  },
  { text: "Que calma mi dolor", time:  },
  { text: "Y cada vez que yo te busco", time:  },
  { text: "Y no te puedo aún hallar", time:  },
  { text: "Me siento un vagabundo", time:  },
  { text: "Perdido por el mundo", time:  },
  { text: "Desordenado si no estás", time:  },
  { text: "Como mueves tú mi felicidad", time:  },
  { text: "Y todo lo que está de más", time:  },
  { text: "Tus ojos me llevan lentamente al sol", time:  },
  { text: "Y tu boca me habla del amor y el corazón", time:  },
  { text: "Tu piel tiene el color de un rojo atardecer", time:  },
  { text: "Y es por ti", time:  },
  { text: "Que late mi corazón", time:  },
  { text: "Y es por ti", time:  },
  { text: "Que he vuelto a hablar de amor", time:  },
  { text: "Y es por ti", time:  },
  { text: "Que brillan mis ojos hoy", time:  },
  { text: "Y es por ti", time:  },
  { text: "Que calma mi dolor", time: 78 },
  { text: "Cada vez que me levanto", time: 80 },
  { text: "Y veo que a mi lado estás", time: 82 },
  { text: "Cada vez que me levanto", time: 84 },
  { text: "Cada vez que me levanto", time: 86 },
  { text: "Cada vez que me levanto", time: 90 },
  { text: "Cada vez que me levanto", time: 92 },
  { text: "Cada vez que me levanto", time: 94 },

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
