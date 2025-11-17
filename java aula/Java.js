/* Complete o código para:
adicionar "limão no final"
remover o primeiro aelemento
ordenar alfabeticamente
inverter a dordem */

let mercado = ["uva", "maçã", "banana"];

// adicionar "limão" no final
mercado.push("limão"); // mercado agora é: ["uva", "maçã", "banana", "limão"]

// remover o primeiro elemento
mercado.shift // mercado agora é: ["maçã", "banana", "limão"]

// ordenar alfabeticamente
mercado.sort // mercado agora é: ["banana", "limão", "maçã"]

// inverter a ordem
mercado.reverse // mercado agora é: ["maçã", "limão", "banana"]


/* qual o valor final do arrey cores após as seguintes operações? */

let cores = ["azul", "verde"];
cores.push("amarelo");
        cores.unshift("vermelho");
        cores= pop();
        cores.shift();
        cores.sort();
        console.log(cores);



/* o que será impresso no console após cada operação */

let numeros = [1, 2, 3, 4, 5, 9];
        numeros.sort(a, b) = a - b
console.log(numeros); // segundo console.log
        numeros.reverse();
        console.log(numeros); //terceiro console.log

        let numers = [1, 2, 3, 4, 5, 9];

numeros.sort((a, b) => a - b); 

console.log(numeros); // segundo console.log
//[1, 2, 3, 4, 5, 9] 

numeros.reverse();
console.log(numeros); //terceiro console.log
//[9, 5, 4, 3, 2, 1] (a ordem anterior é invertida).




