const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44, 100];
//Filtrar maior número
const resultado = numeros.reduce((acc, cur) => {

    if( acc < cur){
        acc = cur;
    }
    return acc;

});
console. log(resultado);