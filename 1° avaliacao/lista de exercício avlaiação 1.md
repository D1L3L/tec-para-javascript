Lista de Exercícios – Javascript

As respostas devem ser entregues em arquivos .JS, contendo as respostas de forma
IDENTIFICADA para cada quesito abaixo.
1) Supondo que a população de um país A seja da ordem de 80000 habitantes com
uma taxa anual de crescimento de 3% e que a população de B seja 200000
habitantes com uma taxa anual de crescimento de 1.5%. Faça um programa que
calcule e escreva o número de anos necessários para que a população do país A
ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
2) Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade
de números pares e a quantidade de números ímpares.
3) Faça um programa que, dado um conjunto de N números, determine o menor
valor, o maior valor e a soma dos valores.
4) Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se
que:
a. Esse funcionário foi contratado em 1995, com salário inicial de R$
1.000,00;
b. Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem
ao dobro do percentual do ano anterior. Faça um programa que determine
o salário atual desse funcionário. Após concluir isto, altere o programa
permitindo que o usuário digite o salário inicial do funcionário.

5) Escreva uma função que encontre a área e o perímetro de um círculo, de acordo
com o raio fornecido.

6) Escreva uma função que informe o retorno de um investimento (montante) com
base nos valores do capital inicial, tempo em meses e taxa de juros mensal,
fornecidos pelo usuário.
Use a fórmula: M = C * (1+i) t
Onde:
 C = Capital inicial investido
 i = Taxa de juros, em percentual
 t = Tempo do investimento, em meses
Exiba o resultado com duas casas decimais.
7) Considere a seguinte lista:
var alunos = [
{ nome: “Maria Joaquinha”, notas: [8,7.5,9], curso: “Sistemas para Internet”},

{ nome: “João Ricardo”, notas: [8,8.5,5], curso: “Direito”},
{ nome: “José Henrique”, notas: [4,10,7], curso: “Administração”},
{ nome: “Pedro da Silva”, notas: [6,7.6,7.5], curso: “Sistemas para Internet”},
{ nome: “Silvana Morais”, notas: [6,7.5,9.5], curso: “Sistemas de Informação”},
{ nome: “Patricia Castro”, notas: [1,9,10], curso: “Arquitetura”},
{ nome: “Joana Ribeiro”, notas: [8,9,9], curso: “Contabilidade”},
{ nome: “Rafael Rocha”, notas: [4,4,9], curso: “Sistemas para Internet”},
{ nome: “Gustavo Henrique”, notas: [8,7.5,5], curso: “Sistemas para Internet”}
];
Desenvolva uma função que receba como parâmetro a lista acima fornecida e imprima
os dados Nome, Média Aritmética e Curso APENAS dos alunos que tiveram média maior ou
igual a 7.