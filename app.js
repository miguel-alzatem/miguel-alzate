//----------------- lecture_01 ----------------------------------//
document.addEventListener("DOMContentLoaded", () => {
  //----------------- lecture_02 ----------------------------------//
  const cardAdj = [
    { name: "1.png", img: "images/1.png" },
    { name: "2.png", img: "images/2.png" },
    { name: "3.png", img: "images/3.png" },
    { name: "4.png", img: "images/4.png" },
    { name: "5.png", img: "images/5.png" },
    { name: "6.png", img: "images/6.png" },
    { name: "1.png", img: "images/1.png" },
    { name: "2.png", img: "images/2.png" },
    { name: "3.png", img: "images/3.png" },
    { name: "4.png", img: "images/4.png" },
    { name: "5.png", img: "images/5.png" },
    { name: "6.png", img: "images/6.png" }
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
      setTimeout(verificarPareja, 1500);
    }
  }
  crearTablero();
});
