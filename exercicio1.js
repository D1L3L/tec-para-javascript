//Obtenha dados da altura e o sexo (M ou F) de 15 pessoas e apresente os seguintes resultados:
//- A maior e a menor altura do grupo;
//- A média de altura dos homens;
//- O número de mulheres.

let alturas = [];
let sexos = [];

// Coletando dados com for para  obter 15 valores
for (let i = 0; i < 3; i++) {
  let altura = parseFloat(prompt("Digite sua altura (em centimetros): "));
  let sexo = prompt("Digite seu sexo (M/F): ").toUpperCase();

  alturas.push(altura);
  sexos.push(sexo);
}
// Ordena entre os valores o maximo e o minimo
let maiorAltura = Math.max(...alturas);
let menorAltura = Math.min(...alturas);
let somaAlturaHomens = 0;
let numeroHomens = 0;
let numeroMulheres = 0;

//  Percorrendo o array de sexos para contar quantos são homens e mulheres
for (let i = 0; i < 3; i++) {
if (sexos[i] === "M") {
    somaAlturaHomens += alturas[i];
    numeroHomens++;
  } else if (sexos[i] === "F") {
    numeroMulheres++;
  }
}
let mediaAlturaHomens = (somaAlturaHomens / numeroHomens);
alert("A maior altura é "+maiorAltura);
alert("A menor altura é "+menorAltura);
if (numeroHomens == 0) {
  alert("Não há homens no grupo");
}else {
  alert("A média de altura dos homens é de "+(mediaAlturaHomens).toFixed(2)+" cm");
}


alert("Número de mulheres: "+ numeroMulheres);