function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5.23;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorCovnertido = "O resultado em real é R$" + valorEmReal.toFixed(2);

  elementoValorConvertido.innerHTML = valorCovnertido;
}
