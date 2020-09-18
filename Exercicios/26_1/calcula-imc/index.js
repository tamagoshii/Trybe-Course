/* Exercicio 1 : O script deve calcular o IMC de uma pessoa e exibi-lo na tela.
utilizado o script start do npm para executar o arquivo index.js.
 >> Instalado o pacote readline-sync para coletar os dados do usuário.
 > IMC é peso / altura².
*/

// importando pacote readline-sync
const readline = require("readline-sync");

function calculaIMC() {
  // questionfloat para tratamendo de numeros decimais.
  const peso = readline.questionFloat("Digite seu Peso: ");
  const altura = readline.questionFloat("Digite sua Altura: ");

  const result = retornaIMC(peso, altura);

  /* Exercise 2: Nível de obesidade segunda a tabela
  */
  if(result < 18.5) {
    console.log("Resultado: " + result + " Abaixo do peso (magreza)");
  } else
  if(result >= 18.5 && result <= 24.9){
    console.log("Resultado: " + result + " Peso normal");
  } else
  if(result >= 25.0 && result <= 29.9){
    console.log("Resultado: " + result + " Acima do peso (sobrepeso)");
  } else
  if(result >= 30.0 && result <= 34.9){
    console.log("Resultado: " + result + " Obesidade grau I");
  } else
  if(result >= 35.0 && result <= 39.9){
    console.log("Resultado: " + result + " Obesidade grau II");
  } else
  if(result > 40.0){
    console.log("Resultado: " + result + " Obesidade graus III e IV");
  }
}

function retornaIMC(peso, altura) {
  // pow eleva altura²
  const imc = (peso / Math.pow(altura, 2)).toFixed(2);
  return imc;
}

calculaIMC();
