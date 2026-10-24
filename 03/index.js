const dinheiro = 80;
const precoTenis = 129.99;
const diferenca = precoTenis - dinheiro;
const descontoNecessario = (diferenca * 100) / precoTenis;

console.log(descontoNecessario.toFixed(2) + ' %');