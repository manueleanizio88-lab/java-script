Console.log("Olá, mundo")
Console.log("Olá, mundo")
Console.log("Olá, mundo")
Console.log("Olá, mundo")
Console.log("Olá, mundo")

let contadir = 0;
while (contador <100) {
    console.log("olá, mundo! (com loop)");
    contador = contador + 1;
}

// Criamos uma varável para contar quantas vezes o loop rodou
let numeroDeVezes = 0

// Enquanto a variável for menor que 5, o bloco dentro do while será executado

while (numeroDeVezes < 5) {
    console.log("Esse é um exemplo de loop while! Rodada número: " + numeroDeVezes);
    numeroDeVezes = numeroDeVezes + 1;
}


for (leti=1;i<=10;i++){
    console.log("contador for.",i)
}

let frutas = [
    "macã", "banana", "uva", "laranja"];

for (let i = 0; i < frutas.length; i++) {
    console.log("Eu gosto de " + frutas[i]);
}


let somaDados = 0;
let rodadas = 0;

while (somaDados < 10) {
    rodadas++;
    let dado1 = Math.floor(Math.random() * 6) + 1; // número aleatório de 1 a 6
    let dado2 = Math.floor(Math.random() * 6) + 1;
    somaDados = dado1 + dado2;
    
    // Uso de Template Literals (crases ``) corrigido para log da rodada
    console.log(`Rodada ${rodadas}: Dado 1 = ${dado1}, Dado 2 = ${dado2}, Soma = ${somaDados}`);
}

// Log final do jogo, fora do loop
console.log(`Fim do jogo! A soma (${somaDados}) atingiu ou ultrapassou 10 após ${rodadas} rodadas.`);



/*contagem de saudação*/
for (let i = 0; i < 7; i++) {
    console.log("Bom dia!");
}


