//5) Escreva uma função que encontre a área e o perímetro de um círculo, de acordo
//com o raio fornecido.

function calcAreaPerimetroCirculo(raio){

    const area = Math.PI * raio * raio;
    const perimetro = 2 * Math.PI * raio;

    return{
        area: area,
        perimetro: perimetro
    };
}

const raio = 10;
const resultado = calcAreaPerimetroCirculo(raio);
console.log("Area do circulo: ", resultado.area);
console.log("Perímetro do círculo: ", resultado.perimetro);