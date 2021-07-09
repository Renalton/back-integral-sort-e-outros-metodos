const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro', 'Natal'];

//Filtrar maior string

const resultado = cidades.reduce((acc, cur) =>{

    if( cur.length > acc.length){
      acc = cur;
    }
    return acc;

});
console.log(resultado);