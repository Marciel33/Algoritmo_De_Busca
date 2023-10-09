function busca(lista, elem) {
    
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elem) {
            return i;
        }
    }
    return null;
}

const listaEstranha = [8, "5", 32,112,60, 0, "corinthians", 11];
const elemento = "corinthians";

const indice = busca(listaEstranha, elemento);

if (indice !== null) {
    console.log(`O índice do elemento ${elemento} é ${indice}`);
} else {
    console.log(`O elemento ${elemento} não se encontra na lista`);
}

