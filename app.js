document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    { name: "ardilla(1)", img: "images/ardilla(1).jpg" },
    { name: "gato(1)", img: "images/gato(1).jpg" },
    { name: "jirafa(1)", img: "images/jirafa(1).jpg" },
    { name: "nutria(1)", img: "images/nutria(1).jpg" },
    { name: "perro(1)", img: "images/perro(1).jpg" },
    { name: "pigs(1)", img: "images/pigs(1).jpg" },
    { name: "ardilla(1)", img: "images/ardilla(1).jpg" },
    { name: "gato(1)", img: "images/gato(1).jpg" },
    { name: "jirafa(1)", img: "images/jirafa(1).jpg" },
    { name: "nutria(1)", img: "images/nutria(1).jpg" },
    { name: "perro(1)", img: "images/perro(1).jpg" },
    { name: "pigs(1)", img: "images/pigs(1).jpg" }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");

      carta.setAttribute("src", "images/reverso.png");

      carta.setAttribute("data-id", i);

      carta.addEventListener("click", voltearCarta);

      cuadricula.appendChild(carta);
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  crearTablero();
});
