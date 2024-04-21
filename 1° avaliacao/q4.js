//4) Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
//a. Esse funcionário foi contratado em 1995, com salário inicial de R$1.000,00;
//b. Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
//c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual do ano anterior. Faça um programa que determine
//o salário atual desse funcionário. Após concluir isto, altere o programa permitindo que o usuário digite o salário inicial do funcionário.
// Função para calcular o reajuste salarial
function calcReajuste(ano, salarioBase, reajusteAnterior) {

    let novoReajuste = reajusteAnterior * 2;
  
    let valorReajuste = salarioBase * (novoReajuste / 100);

    let novoSalario = salarioBase + valorReajuste;

    return {
    ano: ano,
    reajuste: novoReajuste,
    novoSalario: novoSalario
        };
  }

let salarioInicial = 1000.00;
let reajusteInicial = 1.5;
let anoAtual = 2024;
let salarioAtual = salarioInicial;
let reajusteAnterior = reajusteInicial;
  
for (let ano = 1996; ano <= anoAtual; ano++) {
    let resultadoReajuste = calcReajuste(ano, salarioAtual, reajusteAnterior);
    salarioAtual = resultadoReajuste.novoSalario;
    reajusteAnterior = resultadoReajuste.reajuste;
}
console.log(`Salário atual do funcionário: R$ ${salarioAtual}`);

let salarioInicialUsuario = parseFloat(prompt("Digite o salário inicial do funcionário (1995): "));
  
    if (isNaN(salarioInicialUsuario) || salarioInicialUsuario <= 0) {
        console.error("Salário inicial inválido. Digite um valor numérico maior que zero.");
        exit;
}
salarioInicial = salarioInicialUsuario;
