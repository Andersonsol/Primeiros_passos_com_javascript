{/* Faça um programa para calcular o valor de uma viagem;

Você terá 3 variáveis, sendo elas: 
1 - Preço do combustivel;
2 - Gasto médio de combustivel do carro por KM;
3 - Distancia em KM da viagem;

*/

const precoCombustivel = 5.05;
const kmPorLitros = 12;
const distanciaEmKm = 145;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));
}






