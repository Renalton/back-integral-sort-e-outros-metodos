const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];

const resultado = palavras.some((x) => x.length > 5);

console.log(resultado === true? "existe palavra inválida" : "array validado");