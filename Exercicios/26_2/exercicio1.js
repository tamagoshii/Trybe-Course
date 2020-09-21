// Exercício 1: Crie uma função que retorna uma promise:

/* Deve receber 3 parâmetros, fazendo o tratamento de erro caso algum dos parâmetros
   não seja um número. */
async function exPromise(p1, p2, p3) {
  return new Promise((resolve, reject) => {
    /* Caso algum dos parâmetros não seja do tipo Number rejeite a promise e imprima na tela a
    frase "Digite apenas números". */
    if ( typeof p1 !== 'number' || typeof p2 !== 'number' || typeof p3 !== 'number') {
      return reject(new Error('Digite apenas números!'));
    }
    // Caso todos os parâmetros sejam do tipo Number você deve somar os dois primeiros 
    resolve(p1 + p2);
  })
    /* Pegue o resultado da soma e multiplique pelo terceiro parâmetro. Se resultado for 
    menor que 50, rejeite a promise com a mensagem "Valor muito baixo". */
    .then((r) => {
      if (r*p3 < 50){
        return Promise.reject(new Error('Valor muito baixo!'));
      }
      // Caso contrário, aceite a promise imprimindo o resultado da multiplicação na tela.
    return r*p3;
  })
}

exPromise();