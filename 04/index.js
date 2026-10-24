const capital = 1000;
const taxaJuros = 12.5 / 100;
const tempoEmprestimo = 5;
const montante = capital * (1 + taxaJuros) ** tempoEmprestimo;

console.log(montante.toFixed(2) + ' R$');

//04
