const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const resultado = palavras.some(x => x === "cerveja" || x === "vodika");

const yes = "revise sua lista, joão. possui bebida com venda proibida!";
const No = "tudo certo, vamos as compras!";
console.log(resultado === true? yes : No);