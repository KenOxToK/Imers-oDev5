var numeroSecreto = parseInt(Math.random() * 11) ;

function Chutar() {
 var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value)
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns acertou,Miau! :)"
  } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML ="Digite um número de 0-10"   
  } else {  
    elementoResultado.innerHTML = "Miau...errou,o número secreto era " + numeroSecreto;
  }
}