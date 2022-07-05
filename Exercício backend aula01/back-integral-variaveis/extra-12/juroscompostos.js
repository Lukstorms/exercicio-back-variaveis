//"O seu financiamento de C reais teve uma taxa de juros de i%, pois após n meses você teve que pagar M reais."
// o exercício quer a taxa de juro a partir do montante que foi pago do capital inicial e do tempo decorrido
let m = 10000;
let c = 1000;
let n = 24;
let i = Math.pow(m/c , 1/n) - 1;
console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${i}% , pois após ${n} meses você teve que pagar ${m} reais.`);