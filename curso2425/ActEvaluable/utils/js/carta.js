class carta {
  valor;
  imagen;

  constructor(representacion) {
    this.imagen = `./images/cartas/${representacion}.png`;
    this.valor = representacion.substring(0, representacion.length - 1);

    if (this.valor == "J" || this.valor == "K" || this.valor == "Q") {
      this.valor = 10;
    } else {
      this.valor = Number(this.valor);
    }

    if (representacion[0] == "A") {
      this.valor = 1;
      this.imagen = `./images/cartas/1${representacion.substring(1)}.png`;
    }
  }
}
