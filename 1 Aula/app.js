var nome = "Thiago"
var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 8
var notaDoTerceiroBimestre = 7
var notaDoQuartoBimestre = 7 

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4 

var notaFixada = notaFinal.toFixed(1)

// Nome e Nota Fiscal
console.log("Bem vindo " + nome)
console.log("Resultado da nota fiscal é " + notaFinal)

//Aprovado
if(notaFinal >= 6,75) {
   console.log("A sua média esta acima da média, você vai aprovado!")
}
//Reprovado
else{
  console.log("A sua nota esta abaixo da média não melhorar, você vai reprovado")
}