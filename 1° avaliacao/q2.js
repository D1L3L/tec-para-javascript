//2) Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade
//de números pares e a quantidade de números ímpares.

let par = 0;
let impar = 0;

for (let i = 0; i < 10; i++) {
    
    let numero = parseInt(prompt(`Digite o ${i + 1}º número: `));

    if (numero % 2 === 0) {
        par++;
    } else {
        impar++;
    }
}
console.log(`Quantidade de números par: ${par}`);
console.log(`Quantidade de números ímpares: ${impar}`);
