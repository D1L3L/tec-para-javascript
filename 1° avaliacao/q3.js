//3) Faça um programa que, dado um conjunto de N números, determine o menor
//valor, o maior valor e a soma dos valores.

let menorValor = Number.MAX_SAFE_INTEGER; 
let maiorValor = Number.MIN_SAFE_INTEGER;
let soma = 0;

let qtdNumeros = parseInt(prompt("Digite quantos números o conjunto deve ter: "));

for (let i = 0; i < qtdNumeros; i++) {

    let numero = parseFloat(prompt(`Digite o ${i + 1}º número: `));

    if (numero < menorValor) {
        menorValor = numero;
    }

    else if (numero > maiorValor) {
        maiorValor = numero;
    }
    
    soma += numero;
}

console.log(`Menor valor: ${menorValor}`);
console.log(`Maior valor: ${maiorValor}`);
console.log(`Soma dos valores: ${soma}`);
