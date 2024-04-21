//objetos podem ser criados e objetos podem estar dentro de objetos

var aluno = {
    nome: "João Silva Júnior",
    idade:26,
    nacionalidade: "Brasileiro",
    menoridade: false,
    filiaccao:["João Silva","Mariana Silva"],

    endereco: {
        rua: "Av. Manaíra, 464",
        bairro: "Manaíra",
        cidade:"João Pessoa",
    },
    estaRegular: function() {return true;}
}