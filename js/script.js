//audio configuracion volumen
var audio = document.querySelector("#audio");
audio.volume = 0.2;

//Creamos un numero Secreto
let numeroSecreto = Math.trunc(Math.random() * 20) + 1;

// variable score
let score = 20;

// variable highscore
let highscore = 0;

//funciones del boton comprobar
document.querySelector(".comprobar").addEventListener("click", function () {
  let numero = Number(document.querySelector("#adivina").value);

  if (score >= 1) {
    if (numero < 1 || numero > 20) {
      document.querySelector(".mensaje").textContent =
        "⛔ NUMERO FUERA DE RANGO";
    } else if (numero === numeroSecreto) {
      document.querySelector(".mensaje").textContent = "🎉 HAS GANADO!";
      document.querySelector(".numeroSecreto").textContent = numeroSecreto;

      document.querySelector(".mensaje").style.fontSize = "2rem";
      document.querySelector(".numeroSecreto").style.width = "20rem";
      document.querySelector("body").style.backgroundColor = "#60b347";
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
      score = 0;
    } else {
      score--;
      document.querySelector(".score").textContent = score;

      if (score === 0) {
        document.querySelector(".mensaje").textContent = "💥 HAS PERDIDO!";
        document.querySelector(".numeroSecreto").textContent = numeroSecreto;

        document.querySelector(".mensaje").style.fontSize = "2rem";
        document.querySelector(".numeroSecreto").style.width = "20rem";
        document.querySelector("body").style.backgroundColor =
          "rgb(168, 31, 31)";
      } else if (score >= 1 && numero < numeroSecreto) {
        document.querySelector(".mensaje").textContent =
          "📉 EL NUMERO ES MUY BAJO!";
      } else if (score >= 1 && numero > numeroSecreto) {
        document.querySelector(".mensaje").textContent =
          "📈 EL NUMERO ES MUY ALTO!";
      }
    }
  }
});

//funciones del boton reiniciar
document.querySelector(".reiniciar").addEventListener("click", function () {
  //Caracteristicas html
  //reiniciar el numero secreto ?
  document.querySelector(".numeroSecreto").textContent = "?";
  //reiniciar el imput con id adivina
  document.querySelector("#adivina").value = "";
  //reiniciar el mensaje a: Escribe un numero...
  document.querySelector(".mensaje").textContent = "Escribe un numero...";
  //reiniciar score
  score = 20;
  document.querySelector(".score").textContent = score;

  //Cartacteristicas css
  //reiniciar el color de fondo
  document.querySelector("body").style.backgroundColor = "#222";
  //reiniciar el width a 15rem de la clase numeroSecreto
  document.querySelector(".numeroSecreto").style.width = "15rem";
});
