//6) Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital inicial, tempo em meses e taxa de juros mensal, fornecidos pelo usuário.
//Use a fórmula: M = C * (1+i) t Onde:
// C = Capital inicial investido
// i = Taxa de juros, em percentual
// t = Tempo do investimento, em meses
//Exiba o resultado com duas casas decimais.
function calcMontante(){

    let capitalInicialInvestido = parseFloat(prompt("Digite o valor do capital inicial investido: "));
    let taxaDeJuros = parseFloat(prompt("Digite a taxa de juros mensal (em percentual): "));
    let mesesInvestindo = parseInt(prompt("Digite o tempo do investimento(em meses):"));

    taxaDeJuros /= 100;
    let montante = capitalInicialInvestido * Math.pow ((1 + taxaDeJuros), mesesInvestindo);
    montante = montante.toFixed(2);
    alert("O montante ao final de " + mesesInvestindo + "meses será de R$" + montante);
}

calcMontante();