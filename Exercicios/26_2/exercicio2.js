// Exercicio 2: refatorando exercicio 1 para async/await. 
const refatorando = async (p1, p2, p3) => {
  if (typeof p1 !== 'number' || typeof p2 !== 'number' || typeof p3 !== 'number') {
    return Promise.reject(new Error('Digite apenas números!'));
  }
  const sum = p1 + p2;
  const mul = sum * p3;
  if (mul < 50) {
    return Promise.reject(new Error('Valor muito baixo!'))
  }
  return mul;
};
