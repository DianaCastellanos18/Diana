let url =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple&encode=url3986";

// se crean las variables
let preguntas = [];
let resultado = 0;
let preguntaIndex = 0;

//función para consultar las preguntas
async function consultaPregunta() {
  let respuesta = await fetch(url); //cogemos url del api
  let respuestaJSON = await respuesta.json(); //lo recojo con json y lo instroduzco en una variable

  if (respuestaJSON.results && respuestaJSON.results.length > 0) {
    ///si hay preguntas, la mostramos
    preguntas = respuestaJSON.results;
    mostrarPregunta();
  }
}

//función para mostrar las preguntas
function mostrarPregunta() {
  let lista = document.getElementById("preguntas-lista");
  lista.innerHTML = "";

  if (Array.isArray(preguntas) && preguntas.length > 0) {
    if (preguntaIndex < preguntas.length) {
      let pregunta = preguntas[preguntaIndex];
      let lista1 = document.createElement("li");
      lista1.innerText = `Pregunta ${preguntaIndex + 1}: ${decodeURIComponent(
        pregunta.question
      )}`;
      lista.appendChild(lista1);

      // Mostrar las opciones de la pregunta dándole al botón empezar
      let empezar = document.getElementById("empezar");
      empezar.onclick = () => {
        mostrarOpciones(pregunta);
      };
    } else {
      // Se muestra el resultado final
      Swal.fire({
        title: "Has respondido a todas las preguntas",
        text: "Tu puntuación es: " + resultado,
        icon: "info",
      });
    }
  }
}

// Función para mostrar las opciones de cada pregunta
function mostrarOpciones(pregunta) {
  let respuestas = [...pregunta.incorrect_answers, pregunta.correct_answer];
  respuestas.sort(() => Math.random() - 0.5);

  Swal.fire({
    title: decodeURIComponent(pregunta.question),
    icon: "question",
    html: respuestas
      .map(
        (opcion) =>
          `<button class="btn btn-outline-primary"" style="margin:5px" onclick="verificarRespuesta('${opcion}', '${pregunta.correct_answer}')">${opcion}</button>`
      )
      .join(""),
    showCancelButton: false,
  }).then(() => {
    preguntaIndex++;
    mostrarPregunta();
  });
}

// Función para ver si la respuesta es correcta o falsa
function verificarRespuesta(seleccionada, correcta) {
  if (seleccionada === correcta) {
    resultado++;
    Swal.fire("¡Correcto!", "Es correcto", "success");
  } else {
    Swal.fire("Incorrecto", "La respuesta es incorrecta", "error");
  }

  // Muestro la puntuación
  document.getElementById("puntua").textContent = `Puntuación: ${resultado}`;
}
//llamamos al metodo , y cnsultamos las preguntas para luego mostrarlas.
consultaPregunta();
