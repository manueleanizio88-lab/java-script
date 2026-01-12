//Função tradicional
function dobraValor(valor){
    let resultado = valor * 2
    return resultado
}
console.log(dobraValor(10))

//Função anonima
const dobraValorAnonimo = function (valor) {
    let resultado = valor * 2;
    return resultado;
};

console.log(dobraValorAnonimo(100));

// função arrow (função flecha)
const dobraValorArrowFunction = (valor) => {
    let resultado = valor * 2;
    return resultado;
};

console.log(dobraValorArrowFunction(150)); 
const dobraValorArrowFunctionSimplificado= (valor)=> valor * 2

console.log(dobraValorArrowFunctionSimplificado(1))


// crie uma função anonima que receba dois números e retorne a soma deles
// Atribua essa função a uma variável
// Chamada somar e teste com alguns valores


const somar = function(a, b) {
    return a + b;
  };
  
  // Testando com alguns valores
  console.log(somar(2, 3));    // 5
  console.log(somar(10, 5));   // 15
  console.log(somar(-4, 7));   // 3

  // crie uma fução anônima que receba um numero e:
  // retorne 'Par" se o numero for par
  // retorne "ímpar" se o numero for ímpar
  
  const verificarParOuImpar = function(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
};
  console.log(verificarParOuImpar(53))

  //crie uma função anonima que receba uma nota de aluno e:
  //retorne "Aprovado" se a nota for maior ou igual a 7
  //retorne "recuperação" se a nota for maior ou igual a 3 menor que 7
  //retorne "reprovado" se a nota for menor que 3


  const verificarAprovacao = (nota) => {
    if (nota >= 7) {
        return "Aprovado";
    } else if (nota >= 3) { // Nota entre 3 e 6.9
        return "Recuperação";
    } else { // Nota menor que 3
        return "Reprovado";
    }
};
console.log(verificarAprovacao(7))

//notas>0
// notas<0
//textos nas notas

const verificarAprovacao = (nota) => {
    // 1. Verifica se é texto ou um número inválido (NaN)
    if (typeof nota !== 'number' || isNaN(nota)) {
        return "Valor inválido: Texto detectado";
    }

    // 2. Verifica se a nota é negativa ou maior que 10
    if (nota < 0 || nota > 10) {
        return "Valor inválido: Nota fora do intervalo (0-10)";
    }

    // 3. Lógica de classificação
    if (nota >= 7) {
        return "Aprovado";
    } else if (nota >= 3) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
};

console.log(verificarAprovacao(5))


// crie uma função anonima que receba
// o nome, sobrenome e a ordem de apresentação
// se a ordem for "direita" devera apresnetar nome e sobrinome
// se a ordem for "iversa" deverá apresentar sobrenome e nome

function verificarCompleto(nome, sobrenome, ordem) {
    const ordemLower = ordem.toLowerCase();
    if (ordemLower === "direita") {
        return `${nome} ${sobrenome}`;
    } else if (ordemLower === "inversa") {
        return `${sobrenome} ${nome}`;
    } else {
        return "valor inválido";
    }
}
console.log(verificarCompleto("Harrison", "vieira", "inversa"))


const verificarCompleto = (nome, sobrenome, ordem) => {
    if (nome.length < 2 || sobrenome.length < 2) {
        return "Erro: nome ou sobrenome estão inválidos";
    }

    // Verifica se o nome contém números
    for (let letra of nome) {
        if (letra >= '0' && letra <= '9') {
            return "Erro: Nome contém números";
        }
    }

    for (let i =0;i <nome.length;i++){
        
    }
        if (!isNaN(nome[i]))
            return "o número possui um numero"
    
    }











