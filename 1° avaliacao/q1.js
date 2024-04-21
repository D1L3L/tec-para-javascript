//1) Supondo que a população de um país A seja da ordem de 80000 habitantes com
//uma taxa anual de crescimento de 3% e que a população de B seja 200000
//habitantes com uma taxa anual de crescimento de 1.5%. Faça um programa que
//calcule e escreva o número de anos necessários para que a população do país A
//ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

function calcAnos(populacaoA, taxaA, populacaoB, taxaB){
    let anos = 0;
    while (populacaoA < populacaoB){
        populacaoA *= (1 + taxaA / 100);
        populacaoB *=(1 + taxaB / 100);
        anos ++;
    }
    return anos;
}

const populacaoA = 80000;
const taxaA = 3;
const populacaoB = 200000;
const taxaB = 1.5;

const anosNecessarios = calcAnos(populacaoA, taxaA, populacaoB, taxaB);

document.write('Serão necessários ${anosNecessarios} anos para que a população A ultrapasse ou iguale a população B');
