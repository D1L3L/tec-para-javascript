var pessoa1 = {
    nome: "João Silva",
    idade: 25,
    filiacao: [
        "José Silva", "Maria Silva",
    ],
    endereco: {
        rua: "Rua das Flores",
        cidade: "São Paulo",
        estado: "SP",
    },
};

var pessoa2 = {
    nome: "Ana Oliveira",
    idade: 30,
    filiacao: [
        "Pedro Oliveira", "Ana Oliveira"
    ],
    endereco: {
        rua: "Avenida Brasil",
        cidade: "Rio de Janeiro",
        estado: "RJ",
        }
    };

    function dadosCompleto(p) {
    return (p.nome != null && p.idade != null && p.filiacao != null && p.endereco != null)
    }
    function imprimirDados(p) {
        if (dadosCompleto(p) == true){
        console.log("Os dados da pessoa estao completos.")
        console.log(`Nome: ${p.nome}`)
        console.log(`Idade: ${p.idade} anos`)
        console.log(`Filiação: ${p.filiacao[0]} e ${p.filiacao[1]}`)
        console.log(`Endereço:`)
        console.log(`Rua: ${p.endereco.rua}, Nº não informado.`)
        console.log(`Cidade: ${p.endereco.cidade} - UF: ${p.endereco.estado}.`)}
        else {
            console.log("Os dados da pessoa ainda nao estao completos.")
        }
}
console.log (dadosCompleto(pessoa1));
console.log (dadosCompleto(pessoa2));
console.log (imprimirDados(pessoa1));
console.log (imprimirDados(pessoa2));