const numeros = [0, 122, 4, 5, 7, 8, 44];

const resultado = numeros.every(x => (x % 2 === 0));
console.log(resultado === false? "Array inválido" : "Array válido");