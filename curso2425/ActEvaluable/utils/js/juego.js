//empieda el juego
Swal.fire({
  title: "Comienza el juego",
  text: "Adelante!",
  icon: "success",
});

let nombre = prompt("Porfavor introduce tu nombre");
alert(`Tu nombre es ${nombre}`);
console.log(`Bienvenido al juego ${nombre}`);

const palos = ["C", "T", "P"];
let baraja = [];
let sumaJugador = 0;
let cuentaBanca = 0;

//creo la baraja de cartas

for (let index = 0; index < palos.length; index++) {
  for (let i = 1; i <= 13; i++) {
    switch (i) {
      case 11:
        baraja.push(new carta("J" + palos[index]));
        break;

      case 12:
        baraja.push(new carta("Q" + palos[index]));
        break;

      case 13:
        baraja.push(new carta("K" + palos[index]));
        break;

      default:
        baraja.push(new carta(i + palos[index]));
        break;

        baraja.push({
          nombre: nombreCarta,
          imagen: `./images/${nombreCarta}.png`,
        });

        console.log("imagen" + imagen);
    }
  }
}
//Muestro la baraja de cartas
console.log(baraja);

// Metodo shuffle importado de la biblioteca Lodash para barajear
baraja = _.shuffle(baraja);

console.log(baraja);

turnoBanca();
turnoJugador();

//Turno de la Banca

function turnoBanca() {
  let arrayBanca = [];

  //la banca juega hasta que tiene una cuenta de 17 o más
  //saca las cartas una a una con 2 segundos de diferencia

  let intervalo = setInterval(() => {
    if (cuentaBanca < 17) {
      let carta = baraja.pop();
      arrayBanca.push(carta);
      cuentaBanca = sumatorioCartasBanca(arrayBanca);

      console.log(carta.imagen);
      console.log(
        `Valor de la carta: ${carta.valor}, Suma de las cartas: ${cuentaBanca}`
      );
    } else {
      clearInterval(intervalo);

      if (cuentaBanca > 21) {
        console.log("La banca se pasa de 21. ¡Pierde!");
      } else {
        console.log(`La banca se planta con ${cuentaBanca} puntos.`);
      }
    }
  }, 2000);

  // Función para calcular la puntuación de la banca sumando las cartas que van saliendo
  function sumatorioCartasBanca(manoBanca) {
    let total = 0;
    manoBanca.forEach((carta) => {
      total += carta.valor;
    });
    return total;
  }
}
// Le toca al turno del jugador

function turnoJugador() {
  const botonCarta = document.querySelector("#pedir-carta");
  const contenerdorCarta = document.querySelector(".card-group");
  const cartaImagen = document.querySelector("#carta-imagen");
  const botonPlantarse = document.querySelector("#plantarse");
  let contadorSuma = document.querySelector("#contador-suma");
  let cuentaBanca = 0;

  botonCarta.addEventListener("click", () => {
    if (baraja.length > 0) {
      const carta = baraja.pop(); // Saca una carta de la baraja
      console.log(`Saca la carta: ${carta.imagen}`); // Confirma que la ruta es correcta

      cartaImagen.src = carta.imagen;
      cartaImagen.alt = `Carta ${carta.valor}`;

      sumaJugador += carta.valor;
      contadorSuma.textContent = `Suma de cartas: ${sumaJugador}`;

      if (sumaJugador > 17 && sumaJugador < 22) {
        alert(`El jugador se planta con: ${sumaJugador}`);
      } else if (sumaJugador >= 22) {
        Swal.fire({
          title: "Ha perdido el juego",
          text: "Finalizado",
          icon: "error",
        });
      }
    }
  });

  botonPlantarse.addEventListener("click", () => {
    verGanador();
  });
}

// Ahora vamos a ver el final del juego poniendo las condiciones
function verGanador() {
  if (sumaJugador > 21) {
    Swal.fire({
      title: "¡La banca gana!",
      text: " Has perdido el juego",
      icon: "error",
    });
  } else if (sumaJugador == 21 && cuentaBanca == 21) {
    Swal.fire({
      title: "¡Empate!",
      text: " Ha sido un empate",
      icon: "warning",
    });
  } else if (sumaJugador > cuentaBanca || cuentaBanca > 21) {
    Swal.fire({
      title: "¡El jugador gana!",
      text: " Has ganado el juego",
      icon: "success",
    });
  } else if (sumaJugador < cuentaBanca) {
    Swal.fire({
      title: "¡La banca gana!",
      text: " Has perdido el juego",
      icon: "error",
    });
  } else {
    console.log("Empate.");
  }
}
